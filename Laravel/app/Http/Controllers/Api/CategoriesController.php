<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Traits\GlobalTraits;
use Illuminate\Http\Request;
use App\Models\Categories;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\File;
use App\Models\Product;

class CategoriesController extends Controller
{
    use GlobalTraits;

    public function __construct()
    {
        $this->middleware(
            'JWTAuthMiddleware',
            ['except' => ['index', 'categorie', 'store', 'update', 'destroy']]
        );
    }


    public function index()
    {

        $Categories = Categories::all();

        // $id = Categories::get('id');
        // $Product = Product::where('Categorie_id', $id)->count();

        if ($Categories) {
            return $this->SendResponse($Categories, 'success', 200);
        }
        return $this->SendResponse(null, 'Error', 400);
    }

    public function GetCountProdact($id)
    {
        $Product = Product::where('Categorie_id', $id)->get();
        if ($Product) {
            return $this->SendResponse([$Product], "Success", 200);
        }
        return $this->SendResponse([], "Error", 400);
    }

    public function categorie($id)
    {
        $Categorie = Categories::find($id);

        $Product = Product::where('Categorie_id', $id)->count();

        if ($Categorie) {
            return $this->SendResponse([$Categorie,  $Product], "success", 200);
        }

        return $this->SendResponse(null, "Error tha categoure not found", 400);
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|unique:categories',
            'info' => 'required|string|max:855',
            'cover' => 'required',
            'name_folder' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->SendResponse([], $validator->errors(), 401);
        }
        if ($request->hasFile("cover")) {
            $file = $request->file("cover");
            $imageName = time() . '_' . $file->getClientOriginalName();
            $file->move(public_path("cover/"), $imageName);
            $Categories = new Categories;
            $Categories->name = $request->name;
            $Categories->info = $request->info;
            $Categories->auther = $request->auther;
            $Categories->cover = $imageName;
            $Categories->name_folder = $request->name_folder;
            $Categories->save();
            //  create folder from images is project

            $pathfolder = public_path('images' . "\\" . $request->name_folder);
            if ($Categories) {
                if (!file_exists($pathfolder)) {
                    mkdir($pathfolder);
                } elseif (file_exists(public_path('images' . "\\" . $request->name_folder))) {
                    // !mkdir($pathfolder);
                    return $this->SendResponse($Categories, 'tha folder alredy exist', 200);
                }
                return $this->SendResponse($Categories, 'success', 200);
            }
            return $this->SendResponse([], 'Error', 401);
        }
    }



    public function update(Request $request, $id)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'info' => 'required|string|max:855',
            'cover' => 'required',
            'name_folder' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->SendResponse(null, $validator->errors(), 401);
        }
        $Categories = Categories::findOrFail($id);
        if ($request->hasFile("cover")) {
            if (File::exists("cover/" . $Categories->cover)) {
                File::delete("cover/" . $Categories->cover);
            }
            $file = $request->file("cover");
            $imageName = time() . "_" . $file->getClientOriginalName();
            $file->move(public_path("cover/"), $imageName);
            $Categories->name = $request->name;
            $Categories->info = $request->info;
            $Categories->name_folder = $request->name_folder;
            $Categories->cover = $imageName;
            $Categories->auther = $request->auther;
            $Categories->save();
        }
        if (!$request->hasFile("cover")) {
            $Categories->name = $request->name;
            $Categories->info = $request->info;
            $Categories->name_folder = $request->name_folder;
            $Categories->auther = $request->auther;
            $Categories->save();
        }
        $json_string = Categories::where('id', $id)->get('name_folder');
        $json_array = json_decode($json_string, true);
        $value = $json_array[0]['name_folder'];
        $oldFolder = public_path('images' . "\\" . $value);
        $newFolder = public_path('images' . "\\" . $request->name_folder);

        if (file_exists($oldFolder)) {
            rename($oldFolder,  $newFolder);
        } elseif (!file_exists($oldFolder)) {
            mkdir($newFolder);
        }

        if ($Categories) {
            return $this->SendResponse($Categories, "Success update Categories", 200);
        }
        return $this->SendResponse(null, "Error not update Categories", 200);
    }

    public function destroy($id)
    {
        $Categorie = Categories::find($id);
        $Categorie->delete();
        if ($Categorie) {
            $json_string = Categories::where('id', $id)->get('name_folder');
            $json_array = json_decode($json_string, true);
            $value = $json_array[0]['name_folder'];
            $oldFolder = public_path('images' . "\\" . $value);
            File::delete($oldFolder);
            return $this->SendResponse($oldFolder, "success deleted is Categorie", 200);
        }
        return $this->SendResponse(null, "Error tha categoure not deleted", 400);
    }

    public function test($id)
    {

        // $json_string = Categories::where('id', $id)->get('name_folder');
        // $json_array = json_decode($json_string, true);
        // $value = $json_array[0]['name_folder'];
        // $dir = public_path('images' . "\\" . $value);
        $json_string = Categories::where('id', $id)->get('name_folder');
        $json_array = json_decode($json_string, true);
        $value = $json_array[0]['name_folder'];
        $oldFolder = public_path('images' . "\\" . $value);
        $newFolder = public_path('images' . "\\" . "Anas");
        if (file_exists($oldFolder)) {
            rename($oldFolder,  $newFolder);
            return "ReName Sucess";
        } elseif (is_dir($newFolder)) {

            return "tha folder is exist";
        } else if (!file_exists($oldFolder)) {
            mkdir($newFolder);
            return "Create tha folder in path";
        }
    }


    public function testtest()
    {
        // $old = "anas";
        // $new = "anas";

        // $oldFolder = public_path('images' . "\\" . $old);
        // $newFolder = public_path('images' . "\\" . $new);

        // if (file_exists($oldFolder)) {
        //     rename($oldFolder,  $newFolder);
        //     return "done raneme folder";
        // } else if (!file_exists($oldFolder)) {
        //     mkdir($newFolder);
        //     return "created success";
        // } else if (file_exists($newFolder)) {
        //     return "tha folder created before";
        // }
    }
}
