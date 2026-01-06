<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController as User;
use App\Http\Controllers\ServicesController as Services;

Route::get('/', [User::class, 'homepage']);
Route::get('/about', [User::class, 'about'])->name('about');
Route::get('/teams', [User::class, 'team'])->name('team');
Route::get('/career', [User::class, 'career'])->name('career');
Route::get('/partner', [User::class, 'partner'])->name('partners');
Route::get('/press-release', [User::class, 'pressRelease'])->name('pressRelease');
Route::get('/contact', [User::class, 'contact'])->name('contact');
Route::group(['prefix' => 'services'], function () {
    Route::get('/blockchain-development', [Services::class, 'blockchainDevelopment'])->name('blockchainDevelopment');
});
