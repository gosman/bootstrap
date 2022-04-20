<?php

namespace App\Http\Controllers;

use App\Http\Requests\EditProfileRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{

    public function edit()
    {

        return view('profile.edit')->with([
            'user' => auth()->user(),
        ]);
    }


    public function update(EditProfileRequest $request, $userId)
    {

        $validated = $request->validated();

        if ($validated) {

            $validated['password'] = Hash::make($validated['password']);
            User::find($userId)->update($validated);
            auth()->logout();

            return redirect('/login');
        }

        abort(404);
    }

}
