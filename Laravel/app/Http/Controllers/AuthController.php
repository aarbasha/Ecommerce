<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Http\Traits\GlobalTraits;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Factories\Factory;

class AuthController extends Controller
{
    use GlobalTraits;
    // #########################################################################
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'logout', 'refresh', 'userProfile']]);
    }
    // #########################################################################
    public function login(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6',
        ]);
        if ($validator->fails()) {
            return $this->SendResponse(null, $validator->errors(), 422);
        }
        if (!$token = auth()->attempt($validator->validated())) {
            return $this->SendResponse(null, 'Error in email or password', 401);
        }
        return $this->SendResponse(
            $this->createNewToken($token),
            "Success Login",
            200
        );
    }
    // #########################################################################
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'username' => 'required|string|min:6|unique:users',
            'avatar' => 'required',
            'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/|min:10',
            'password' => 'required|string|min:8',
        ]);
        if ($validator->fails()) {
            return $this->SendResponse(null, $validator->errors(), 400);
        }
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $imageName = time() . '_' . $file->getClientOriginalName();
            $user = new User;
            $user->name = $request->name;
            $user->username = $request->username;
            $user->email = $request->email;
            $user->phone = $request->phone;
            $user->password = bcrypt($request->password);
            $user->avatar = $imageName;
            $file->move(public_path("photos/"), $imageName);
            $user->save();
        }
        if ($user) {
            return $this->SendResponse($user, 'User successfully registered', 200);
        }
        return $this->SendResponse(null, 'Error with registered', 401);
    }
    // #########################################################################
    public function logout(Request $request)
    {
        auth()->logout();
        return $this->SendResponse(auth()->user(), 'User successfully logout', 200);
    }
    // #########################################################################
    public function refresh()
    {
        return $this->SendResponse(Auth::guard('api')->refresh(), null, 200);
    }
    // #########################################################################
    public function userProfile()
    {
        // note send token with link
        return $this->SendResponse(auth()->user(), 'success', 200);
    }
    // #########################################################################
    protected function createNewToken($token)
    {
        return $this->SendToken($token);
    }
    // #########################################################################


}
