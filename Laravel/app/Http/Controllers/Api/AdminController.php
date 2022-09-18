<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Traits\GlobalTraits;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
// use App\Http\Resources\UserResource;

class AdminController extends Controller
{

    use GlobalTraits;

    public function __construct()
    {
        $this->middleware(
            'JWTAuthMiddleware',
            ['except' => ['index', 'User', 'store', 'update', 'destroy']]
        );
    }

    public function index()
    {
        $users = User::all();

        if ($users) {
            // return $this->SendResponse($users, 'success tha get all users', 200);
            return response()->json([
                'statue' => 200,
                'msg' => 'success',
                'data' => $users,
            ]);
        }
        return $this->SendResponse(null, 'Error not Get tha users', 401);
    }

    public function User($id)
    {

        $User = User::findOrFail($id);
        if ($User) {
            return $this->SendResponse($User, 'success tha info user', 200);
        }
        return $this->SendResponse(null, 'Error not Get tha user', 401);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "name" => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'username' => 'required|string|min:5|unique:users',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:9',
            'password' => 'required|string|min:8',
            'description' => 'string',
        ]);
        if ($validator->fails()) {
            return $this->SendResponse(null, $validator->errors(), 401);
        }
        if ($request->hasFile("avatar")) {
            $file = $request->file("avatar");
            $imageName = time() . '_' . $file->getClientOriginalName();
            $user = new User;
            $user->name = $request->name;
            $user->description = $request->description;
            $user->username = $request->username;
            $user->email = $request->email;
            $user->phone = $request->phone;
            $user->rouls = $request->rouls;
            $user->status = $request->status;
            $user->password = bcrypt($request->password);
            $user->avatar = $imageName;
            $file->move(public_path("photos/"), $imageName);
            $user->save();
            if ($user) {
                return $this->SendResponse($user, 'Succss ', 200);
            }
            return $this->SendResponse(null, 'Error ', 401);
        } elseif (!$request->hasFile("avatar")) {
            $user = new User;
            $user->name = $request->name;
            $user->description = $request->description;
            $user->username = $request->username;
            $user->email = $request->email;
            $user->phone = $request->phone;
            $user->rouls = $request->rouls;
            $user->status = $request->status;
            $user->password = bcrypt($request->password);
            $user->save();
            if ($user) {
                return $this->SendResponse($user, 'Succss ', 200);
            }
            return $this->SendResponse(null, 'Error ', 401);
        }
    }

    public function update(Request $request, $id)
    {


        // return $this->SendResponse($request, 'test send Request', 401);


        $validator = Validator::make($request->all(), [
            "name" => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100',
            'username' => 'required|string|min:5',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:9',
            'password' => 'string|min:8',
            'description' => 'string'
        ]);

        if ($validator->fails()) {
            return $this->SendResponse(null, $validator->errors(), 401);
        }
        if ($request->hasFile("avatar")) {
            $file = $request->file("avatar");
            $imageName = time() . '_' . $file->getClientOriginalName();
            $user = User::find($id);
            $user->name = $request->name;
            $user->email = $request->email;
            $user->username = $request->username;
            $user->phone = $request->phone;
            $user->avatar = $imageName;
            $user->description = $request->description;
            $user->rouls = $request->rouls;
            $user->status = $request->status;
            if ($request->password) {
                $user->password = bcrypt($request->password);
            }
            $user->update();
            $file->move(public_path("photos/"), $imageName);
            if ($user) {
                return $this->SendResponse($user, "success", 200);
            }
            return $this->SendResponse(null, "Error", 401);
        } elseif (!$request->hasFile("avatar")) {
            $user = User::find($id);
            $user->name = $request->name;
            $user->email = $request->email;
            $user->username = $request->username;
            $user->phone = $request->phone;
            $user->description = $request->description;
            $user->rouls = $request->rouls;
            $user->status = $request->status;
            if ($request->password) {
                $user->password = bcrypt($request->password);
            }
            $user->update();
            if ($user) {
                return $this->SendResponse($user, "success", 200);
            }
            return $this->SendResponse(null, "Error", 401);
        }
    }

    public function destroy($id)
    {

        $user = User::find($id);

        if ($user) {
            $user->delete();
            return $this->SendResponse(null, 'success delete tha user', 200);
        }
        return $this->SendResponse(null, 'error was delete tha user before', 401);
    }
}
