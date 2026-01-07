<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndustriesController extends Controller
{
    public function entertainment()
    {
        return view('user.industries.entertainment');
    }
}
