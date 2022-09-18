<?php

namespace App\Http\Traits;


trait GlobalTraits
{
    public function SendResponse($Data = null, $Massage = null, $status = null)
    {
        $array = [
            'data' => $Data,
            'Massage' => $Massage,
            'status' => $status
        ];
        return response($array);
    }


    public function SendToken($token = null)
    {

        $array = [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 600,
            'user' => auth()->user()
        ];

        return response($array);
    }

    public function ValdationInput()
    {
    }
}
