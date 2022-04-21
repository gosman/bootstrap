<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;


Route::middleware(['auth'])->group(function () {

    Route::get('/', [
        DashboardController::class,
        'index',
    ])->name('dashboard');

    Route::resource('users', UsersController::class)->middleware('administrator');
    Route::resource('profile', ProfileController::class);

});


require __DIR__.'/auth.php';
