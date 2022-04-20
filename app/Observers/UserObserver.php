<?php

namespace App\Observers;

use App\Mail\UserCreated;
use App\Models\User;
use Illuminate\Support\Facades\Mail;

class UserObserver
{

    public function created(User $user)
    {

        Mail::to('graham@edm.ie')->send(new UserCreated($user));
    }


    public function updated(User $user)
    {
        //
    }


    public function deleted(User $user)
    {
        //
    }


    public function restored(User $user)
    {
        //
    }


    public function forceDeleted(User $user)
    {
        //
    }

}
