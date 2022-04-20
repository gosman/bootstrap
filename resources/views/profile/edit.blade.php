<x-app-layout>

    <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">PROFILE</h3>
                </div>
            </div>

            <div class="mt-5 md:mt-0 md:col-span-2">
                <form method="POST" action="{{route('profile.update',$user->id)}}">
                    @csrf
                    {{ method_field('PUT') }}
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" name="name" class="mt-1 focus:ring-transparent focus:border-espresso block w-full shadow-sm sm:text-sm border-gray-300 @error('name') border-red-300 text-red-900  @enderror rounded-md" value="{{old('name') ?? $user->name}}">
                                    @error('name')
                                    <p class="mt-2 text-sm text-red-600" id="email-error">{{$message}}</p>
                                    @enderror
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="last-name" class="block text-sm font-medium text-gray-700">E-Mail</label>
                                    <input type="text" name="email" class="mt-1 focus:ring-transparent focus:border-espresso block w-full shadow-sm sm:text-sm border-gray-300 @error('email') border-red-300 text-red-900  @enderror rounded-md" value="{{old('email') ?? $user->email}}">
                                    @error('email')
                                    <p class="mt-2 text-sm text-red-600" id="email-error">{{$message}}</p>
                                    @enderror
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="first-name" class="block text-sm font-medium text-gray-700">Password</label>
                                    <input type="password" name="password" class="mt-1 focus:ring-transparent focus:border-espresso block w-full shadow-sm sm:text-sm border-gray-300 @error('password') border-red-300 text-red-900  @enderror rounded-md">
                                    @error('password')
                                    <p class="mt-2 text-sm text-red-600" id="email-error">{{$message}}</p>
                                    @enderror
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="last-name" class="block text-sm font-medium text-gray-700">Repeat Password</label>
                                    <input type="password" name="password_confirmation" class="mt-1 focus:ring-transparent focus:border-espresso block w-full shadow-sm sm:text-sm border-gray-300 @error('password') border-red-300 text-red-900  @enderror rounded-md">
                                </div>

                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <x-button class="ml-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                                </svg>
                                <span class="pl-2">{{ __('Update Profile') }}</span>
                            </x-button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <div class="hidden sm:block" aria-hidden="true">
        <div class="py-5">
            <div class="border-t border-gray-200"></div>
        </div>
    </div>


</x-app-layout>
