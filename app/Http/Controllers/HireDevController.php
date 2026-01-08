<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HireDevController extends Controller
{
    public function applicationDevelopers()
    {
        return view('user.hire.application-developers');
    }
    public function uiUxDesigner()
    {
        return view('user.hire.ui-ux-designer');
    }
    public function frontendDeveloper()
    {
        return view('user.hire.frontend-developer');
    }
    public function backendDeveloper()
    {
        return view('user.hire.backend-developer');
    }   
    public function blockchainDeveloper()
    {
        return view('user.hire.blockchain-developer');
    }
}
