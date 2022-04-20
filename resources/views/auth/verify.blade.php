<x-guest-layout>
    <x-auth-card>
        <x-slot name="logo">
            <a href="/">
                <x-application-logo class="w-20 h-20 fill-current text-gray-500"/>
            </a>
        </x-slot>

        <form method="POST" action="{{ route('verify.update',$user->id) }}">
            {{ method_field('PUT') }}
            @csrf

            <div class="mt-4">
                <x-label for="email" :value="__('Email')"/>
                <x-input disabled id="email" class="block mt-1 w-full bg-gray-200" type="email" name="email" :value="$user->email" required/>
            </div>

            <div class="mt-4">
                <x-label for="password" :value="__('Password')"/>

                <x-input id="password" class="block mt-1 w-full"
                         type="password"
                         name="password"
                         required autocomplete="none"/>
            </div>

            <div class="mt-4">
                <x-label for="password_confirmation" :value="__('Confirm Password')"/>

                <x-input id="password_confirmation" class="block mt-1 w-full"
                         type="password"
                         name="password_confirmation" required/>
            </div>

            <x-auth-validation-errors class="mb-4" :errors="$errors"/>

            <div class="flex items-center justify-end mt-4">

                <x-button class="ml-4">
                    {{ __('verify') }}
                </x-button>
            </div>
        </form>
    </x-auth-card>
</x-guest-layout>
