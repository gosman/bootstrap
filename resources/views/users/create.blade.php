<x-app-layout>

    <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">

            <a href="{{route('users.index')}}">
                <x-nav-button class="ml-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/>
                    </svg>
                    <span class="pl-2">{{ __('Users') }}</span>
                </x-nav-button>
            </a>
        </div>
    </div>

    <div class="sm:border-t sm:border-gray-200 sm:pt-5 mt-5"></div>

    <div class="mt-10 sm:mt-0">
        <div class="md:grid md:grid-cols-3 md:gap-6">
            <div class="md:col-span-1">
                <div class="px-4 sm:px-0">
                    <h3 class="text-lg font-medium leading-6 text-gray-900">User</h3>
                </div>
            </div>

            <div class="mt-5 md:mt-0 md:col-span-2">
                <form method="POST" action="{{route('users.store')}}">
                    @csrf
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" name="name" class="mt-1 focus:ring-transparent focus:border-espresso block w-full shadow-sm sm:text-sm border-gray-300 @error('name') border-red-300 text-red-900  @enderror rounded-md" value="{{old('name')}}">
                                    @error('name')
                                    <p class="mt-2 text-sm text-red-600" id="email-error">{{$message}}</p>
                                    @enderror
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="last-name" class="block text-sm font-medium text-gray-700">E-Mail</label>
                                    <input type="text" name="email" class="mt-1 focus:ring-transparent focus:border-espresso block w-full shadow-sm sm:text-sm border-gray-300 @error('email') border-red-300 text-red-900  @enderror rounded-md" value="{{old('email')}}">
                                    @error('email')
                                    <p class="mt-2 text-sm text-red-600" id="email-error">{{$message}}</p>
                                    @enderror
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="job_title" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Job Title </label>
                                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                                        <input type="text" name="job_title" autocomplete="family-name" class="max-w-lg block w-full shadow-sm focus:ring-transparent focus:border-espresso sm:max-w-xs sm:text-sm border-gray-300 @error('name') border-red-300 text-red-900  @enderror rounded-md" value="{{old('job_title')}}">
                                        @error('job_title')
                                        <p class="mt-2 text-sm text-red-600" id="email-error">{{$message}}</p>
                                        @enderror
                                    </div>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="role_id" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"> Role </label>
                                    <div class="mt-1 sm:mt-0 sm:col-span-2">
                                        <select name="role_id" autocomplete="country-name" class="max-w-lg block focus:ring-transparent focus:border-espresso w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 @error('role_id') border-red-300 text-red-900  @enderror rounded-md">
                                            <option disabled selected value="">Select Role</option>
                                            @foreach($roles as $role)
                                                <option value="{{$role->id}}">{{$role->role_name}}</option>
                                            @endforeach
                                        </select>
                                        @error('role_id')
                                        <p class="mt-2 text-sm text-red-600" id="email-error">{{$message}}</p>
                                        @enderror
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <x-button class="ml-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                                </svg>
                                <span class="pl-2">{{ __('Create User') }}</span>
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
