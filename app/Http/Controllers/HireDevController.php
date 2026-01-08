<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HireDevController extends Controller
{
    public function applicationDevelopers()
    {
        return view('user.hire.application-developers');
    }
}
