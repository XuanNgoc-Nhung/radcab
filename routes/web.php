<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController as User;

Route::get('/', [User::class, 'homepage']);
Route::get('/about', [User::class, 'about'])->name('about');
Route::get('/teams', [User::class, 'team'])->name('team');
Route::get('/career', [User::class, 'career'])->name('career');
Route::get('/partner', [User::class, 'partner'])->name('partners');