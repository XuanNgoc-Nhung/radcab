<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResourcesController extends Controller
{
    public function freshworks()
    {
        return view('user.resources.freshworks');
    }
}
