<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function login(LoginRequest $request)
    {
        $user = User::where('email', $request->email)->first();

        if (is_null($user) || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Incorrect credentials provided!',
            ], 401);
        }

        return response()->json([
            'token' => $user->createToken("Basic User")->plainTextToken,
            'message' => 'Successfully logged in!'
        ]);
    }
}
