<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\DeleteUserRequest;
use App\Http\Requests\EditUserRequest;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UsersController extends Controller
{


    public function index()
    {

        $data = [
            'users' => User::all(),
        ];

        return view('users.index')->with($data);
    }


    public function create()
    {

        $data = [
            'roles' => Role::all(),
        ];

        return view('users.create')->with($data);
    }


    public function store(CreateUserRequest $request)
    {

        $validated = $request->validated();
        $validated['password'] = Hash::make(Str::random(8));
        User::create($validated);

        return redirect()->route('users.index');
    }


    public function edit($userId)
    {

        $data = [
            'roles' => Role::all(),
            'user' => User::find($userId),
            'administratorCount' => User::where('role_id', 1)->count(),
        ];

        return view('users.edit')->with($data);
    }


    public function update(EditUserRequest $request, $userId)
    {

        $validated = $request->validated();
        $administratorCount = User::where('role_id', 1)->where('id', '<>', $userId)->count();

        if ($administratorCount === 0) {
            $validated['role_id'] = 1;
        }

        User::find($userId)->update($validated);

        return redirect()->route('users.index');
    }


    public function destroy($userId)
    {

        if (auth()->user()->role->id === 1) {

            User::find($userId)->delete();

            return redirect()->route('users.index');
        }

        abort(403);
    }

}
