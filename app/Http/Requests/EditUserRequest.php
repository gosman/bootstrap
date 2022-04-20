<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EditUserRequest extends FormRequest
{

    public function messages()
    {

        return [
            'name.required' => 'Full name is required',
            'name.min' => 'Full name must be at least 3 characters',
            'name.max' => 'Full name cannot exceed 50 characters',
            'job_title.required' => 'Job title is required',
            'job_title.min' => 'Job title must be at least 2 characters',
            'job_title.max' => 'Job title cannot exceed 50 characters',
            'email.unique' => 'E-mail already exists',
            'email.*' => 'A valid e-mail address is required',
            'role_id.required' => 'Please select a role',
        ];
    }


    public function authorize()
    {

        if (auth()->user()->role->id === 1) {

            return true;
        }

        return false;
    }


    public function rules()
    {

        $userId = request()->route()->parameter('user');

        return [
            'name' => 'required|min:3|max:50',
            'job_title' => 'required|min:2|max:50',
            'email' => [
                'required',
                'email:rfc,dns',
                Rule::unique('users')->ignore($userId),
            ],
            'role_id' => 'required',
        ];
    }

}
