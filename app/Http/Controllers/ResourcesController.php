<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ResourcesController extends Controller
{
    public function freshworks()
    {
        return view('user.resources.freshworks');
    }
    public function blogs()
    {
        return view('user.resources.blogs');
    }
    public function podcasts()
    {
        return view('user.resources.podcasts');
    }
    public function pressRelease()
    {
        return view('user.resources.press-release');
    }
}
