<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Traits\GlobalTraits;
use App\Models\Categories;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Validator;
use App\Models\Product;
use App\Models\Image;

class ProductController extends Controller
{
    use GlobalTraits;

    public function __construct()
    {
        $this->middleware(
            'JWTAuthMiddleware',
            ['except' => ['index', 'product', 'store', 'update', 'destroy', 'deleteimage', 'deletecover']]
        );
    }

    public function index()
    {
        // $products = Product::paginate(5);
        $products = Product::all();
        // $images = Image::get();
        $categories = Categories::get('name');

        if ($products) {
            return $this->SendResponse($products, 'success tha All Prodact', 200);
        }
        return $this->SendResponse(null, 'Error tha All Prodact', 400);
    }


    public function product($id)
    {
        $product = Product::find($id);
        $images = Image::where('product_id', $id)->get();

        if ($product) {
            return $this->SendResponse([$product, $images], 'success tha All Prodact', 200);
        }
        return $this->SendResponse(null, 'Error Not Found Prodact', 401);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:products',
            'description' => 'required|string|max:9999999',
            'images' => 'required|min:2|max:102400',
            'cover' => 'required',
            'price' => 'required',
            'Categorie_id' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->SendResponse(null, $validator->errors(), 401);
        }

        if ($request->hasFile("cover")) {
            $file = $request->file("cover");
            $imageName = time() . '_' . $file->getClientOriginalName();
            $product = new Product;
            $product->name = $request->name;
            $product->price = $request->price;
            $product->description = $request->description;
            $product->Categorie_id =  $request->Categorie_id;
            $product->auther = $request->auther;
            $product->cover = $imageName;
            $file->move(public_path("cover/"), $imageName);
            $product->save();
            if ($request->hasFile("images")) {
                $files = $request->file("images");
                foreach ($files as $imagefile) {

                    $imageName = time() . '_' . $imagefile->getClientOriginalName();
                    $image = new Image;
                    // ---------------------------------------------------------------------
                    $json_string = Categories::where('id', $request->Categorie_id)->get('name_folder');
                    $json_array = json_decode($json_string, true);
                    $value = $json_array[0]['name_folder'];
                    $imagefile->move(public_path('images' . "\\" . $value), $imageName);
                    // -------------------------------------------------
                    $image->url = $imageName;
                    $image->product_id = $product->id;
                    $image->save();
                }
            }
            $images = Image::where('product_id', $product->id)->get();
            if ($product) {
                return $this->SendResponse([$product, $images], 'success', 200);
            }
        }
        return $this->SendResponse(null, 'Error', 401);
    }


    public function update(Request $request, $id)
    {

        // $images = Image::where('product_id', $id)->get();
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:855',
            'images' => 'min:2|max:102400',
            'cover' => 'min:2|max:102400',
            'price' => 'required',
            'Categorie_id' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->SendResponse(null, $validator->errors(), 401);
        }

        $product = Product::findOrFail($id);
        if ($request->hasFile("cover")) {
            if (File::exists("cover/" . $product->cover)) {
                File::delete("cover/" . $product->cover);
            }
            $file = $request->file("cover");
            $imageName = time() . "_" . $file->getClientOriginalName();
            $file->move(public_path("cover/"), $imageName);
            $product->name = $request->name;
            $product->description = $request->description;
            $product->price = $request->price;
            $product->cover = $imageName;
            $product->auther = $request->auther;
            $product->Categorie_id =  $request->Categorie_id;
            $product->save();
        }
        if (!$request->hasFile("cover")) {
            $product->name = $request->name;
            $product->description = $request->description;
            $product->price = $request->price;
            $product->auther = $request->auther;
            $product->Categorie_id =  $request->Categorie_id;
            $product->save();
        }
        if ($request->hasFile("images")) {
            $files = $request->file("images");
            foreach ($files as $imagefile) {
                $imageName = time() . '_' . $imagefile->getClientOriginalName();
                $image = new Image;
                // ---------------------------------------------------------------------
                $json_string = Categories::where('id', $request->Categorie_id)->get('name_folder');
                $json_array = json_decode($json_string, true);
                $value = $json_array[0]['name_folder'];
                $imagefile->move(public_path('images' . "\\" . $value), $imageName);

                // -------------------------------------------------
                $image->url = $imageName;
                $image->product_id = $product->id;
                $image->save();
            }
        }
        $images = Image::where('product_id', $product->id)->get();
        if ($product) {
            return $this->SendResponse([$product, $images], 'success', 200);
        }
    }

    public function destroy($id)
    {

        $product = Product::findOrFail($id);

        if (File::exists("cover/" . $product->cover)) {
            File::delete("cover/" . $product->cover);
        }
        // $images = Image::where("product_id", $product->id)->get();

        // $json_string = Categories::where('id', $id)->get('name_folder');
        // $json_array = json_decode($json_string, true);
        // $value = $json_array[0]['name_folder'];

        // // return $value;

        // foreach ($images as $image) {
        //     if (File::exists("images/" . $value . "/" . $image->image)) {
        //         File::delete("images/" . $value . "/" . $image->image);
        //     }
        // }
        if ($product) {
            $product->delete();
            return $this->SendResponse(null, 'success delete tha product', 200);
        }
        return $this->SendResponse(null, 'error was delete tha product before', 401);
    }


    public function DeleteImage(Request $request, $id)
    {
        $images = Image::findOrFail($id);
        if (File::exists("images/" . $request . $images->image)) {
            File::delete("images/" . $request . $images->image);
        }

        $images = Image::find($id)->delete();
        return $this->SendResponse($images, 'success delet images from DB && File System ...', 200);
    }

    public function deletecover($id)
    {
        $cover = Product::findOrFail($id)->cover;
        if (File::exists("cover/" . $cover)) {
            File::delete("cover/" . $cover);
        }
        return back();
    }

    public function test()
    {
        return "test";
    }
}
