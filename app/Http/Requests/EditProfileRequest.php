<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules;

class EditProfileRequest extends FormRequest
{

    public function messages()
    {

        return [
            'name.required' => 'Full name is required',
            'name.min' => 'Full name must be at least 3 characters',
            'name.max' => 'Full name cannot exceed 50 characters',
            'email.unique' => 'E-mail already exists',
            'email.*' => 'A valid e-mail address is required',
        ];
    }


    public function authorize()
    {

        $userId = request()->route()->parameter('profile');

        if (auth()->user()->id == $userId) {

            return true;
        }

        return false;
    }


    public function rules()
    {

        $userId = request()->route()->parameter('profile');

        return [
            'name' => 'required|min:3|max:50',
            'email' => [
                'required',
                'email:rfc,dns',
                Rule::unique('users')->ignore($userId),
            ],
            'password' => [
                'required',
                'confirmed',
                Rules\Password::defaults()->mixedCase()->letters()->numbers()->symbols()->uncompromised(),
            ],
        ];
    }

}
