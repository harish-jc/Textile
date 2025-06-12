<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/

// Optional: Redirect root to login or homepage
// Route::get('/', function () {
//     return redirect()->route('admin.login');
// });
Route::get('/', function () {
    return Inertia::render('Home/Home');
})->name('home');

// User dashboard (for regular users, if applicable)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});

// Admin Routes
Route::prefix('admin')->name('admin.')->group(function () {

    // Admin authentication routes
    Route::middleware('guest')->group(function () {
        Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
        Route::post('/login', [AuthController::class, 'login'])->name('login.submit');
    });

    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

    // Admin-only protected routes
    Route::middleware(['auth', 'admin'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        // Change password
        Route::get('/change-password', fn() => Inertia::render('Admin/Auth/ChangePassword'))->name('change-password');
        Route::post('/change-password', [AuthController::class, 'changePassword'])->name('change-password.submit');

        // Profile management
        Route::get('/profile', [AdminController::class, 'editProfile'])->name('profile');
        Route::post('/profile', [AdminController::class, 'updateProfile'])->name('profile.update');
    });
});

// Laravel Breeze/Sanctum auth routes
require __DIR__ . '/auth.php';
