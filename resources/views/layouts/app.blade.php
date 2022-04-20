<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full bg-white">
    <head>
        <meta charset=" utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>{{ config('app.name', 'Espresso Parts App') }}</title>
        <link rel="stylesheet" href="{{ asset('css/jquery.css') }}">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">

    </head>
    <body class="h-full">

        <div class="min-h-full">

            @include('layouts.mobile-menu-modal')
            @include('layouts.sidebar')
            @include('layouts.mobile-nav')

            <div class="lg:pl-64 flex flex-col">

                <main class="flex-1">

                    <div class="border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
                        <div class="flex-1 min-w-0">
                            <h1 class="text-lg font-medium leading-6 text-gray-900 sm:truncate">{{config('app.name')}}</h1>
                        </div>
                        <div class="mt-4 flex sm:mt-0 sm:ml-4">
                            <form method="POST" action="{{ route('logout') }}">
                                @csrf
                                <button type="submit" class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-espresso hover:bg-espresso-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-espresso-light sm:order-1 sm:ml-3">Log Out</button>
                            </form>
                        </div>
                    </div>

                    <div class="lg:p-6 lg:p-8">
                        {{ $slot }}
                    </div>
                </main>
            </div>
        </div>
        <script src="{{ asset('js/app.js') }}" defer></script>
    </body>
</html>
