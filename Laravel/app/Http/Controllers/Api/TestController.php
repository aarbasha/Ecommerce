<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Traits\GlobalTraits;
use App\Models\Image;


class TestController extends Controller
{
    use GlobalTraits;
    public  function test()
    {
        return "test postman";
    }

    public function uplodeMulteFiles(Request $request)
    {

        $imagas = $request->file('imagas');
        $imagasName = '';
        foreach ($imagas as $imaga) {
            $image = new Image;
            $new_name = rand() . "." . $imaga->getClientOriginalExtension();
            $path = $imaga->move(public_path('/uplodes/'), $new_name);
            $imagasName = $imagasName . $new_name . ",";
            $image->url = $path;
            $image->product_id = 0;
            $image->save();
        }
        $image_DB = $imagasName;

        return $this->SendResponse([$image_DB], "success", 200);
    }
}
