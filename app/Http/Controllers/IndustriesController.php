<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndustriesController extends Controller
{
    public function entertainment()
    {
        return view('user.industries.entertainment');
    }
    public function education()
    {
        return view('user.industries.education');
    }
    public function transportLogistics()
    {
        return view('user.industries.transport-logistics');
    }
}
