<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules;

class VerifyUserRequest extends FormRequest
{

    public function authorize()
    {

        return true;
    }


    public function rules()
    {

        return [
            'password' => [
                'required',
                'confirmed',
                Rules\Password::defaults()->mixedCase()->letters()->numbers()->symbols()->uncompromised(),
            ],
        ];
    }

}
