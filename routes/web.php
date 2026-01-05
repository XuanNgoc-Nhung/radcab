<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController as User;

Route::get('/', [User::class, 'homepage']);