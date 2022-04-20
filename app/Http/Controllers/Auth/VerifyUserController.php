<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\VerifyUserRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class VerifyUserController extends Controller
{

    public function create()
    {

        $user = User::where('email', request()->email)->whereNull('email_verified_at')->first();

        if (!$user) {
            abort(404);
        }

        return view('auth.verify')->with([
            'user' => $user,
        ]);
    }


    public function update(VerifyUserRequest $request, $userId)
    {

        $user = User::find($userId);

        if (!$user->email_verified_at) {

            $user->update([
                'email_verified_at' => now(),
                'password' => Hash::make($request->password),
            ]);

            Auth::login($user);

            return redirect(RouteServiceProvider::HOME);
        }

        abort(404);
    }

}
