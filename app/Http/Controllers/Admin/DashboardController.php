<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        // You can pass data to the dashboard view here if needed
        return Inertia::render('Admin/Dashboard');
    }
}
