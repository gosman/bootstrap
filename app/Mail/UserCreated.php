<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class UserCreated extends Mailable
{

    use Queueable, SerializesModels;

    public function __construct($user)
    {

        $this->user = $user;
    }


    public function build()
    {

        return $this->subject(config('app.name').' Invite')->markdown('emails.default', [
            'body' => "{$this->user->name}\n\nYou have been invited to join ".config('app.name')."\n\nPlease click the link below to verify your account and set your password.",
            'buttonUrl' => config('app.url').'/verify?email='.$this->user->email,
            'buttonText' => 'Verify Account',
            'signoff' => 'Thank you',
        ]);
    }

}
