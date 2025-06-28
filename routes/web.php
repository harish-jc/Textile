<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\ColorController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\MaterialController;
use App\Http\Controllers\Admin\PatternController;
use App\Http\Controllers\Admin\ProductController as AdminProductController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Product\ProductController;
use App\Http\Controllers\Cart\CartController;
use App\Http\Controllers\CategoryController;

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

// Route::get('/products', function () {
//     return Inertia::render('Website/Product/products');
// })->name('products.index');

Route::get('/products/{id}', [ProductController::class, 'show'])
    ->where('id', '[0-9]+')
    ->name('products.show');
// Route::get('/products/{title}', function ($title) {
//     return Inertia::render(
//         'Website/Product/products',
//         ['title' => ucwords(str_replace('-', ' ', $title))]
//     );
// })->name('products.index');
Route::get('/products/{filter?}', [ProductController::class, 'index'])
    ->name('products.index');

Route::get('/cart', [CartController::class, 'index'])->name('cart.index');
Route::post('/cart/add/{id}', [CartController::class, 'add'])->name('cart.add');
Route::post('/cart/update', [CartController::class, 'update'])->name('cart.update');
Route::post('/cart/remove', [CartController::class, 'remove'])->name('cart.remove');

Route::get('/aboutus', function () {
    return Inertia::render('Website/AboutUs/aboutus');
})->name('aboutus');

Route::get('/checkout', function () {
    return Inertia::render('Website/Checkout/checkout');
})->name('checkout');

Route::get('/collection/{title}', [ProductController::class, 'collection'])->name('collection.show');
Route::get('/contact', function () {
    return Inertia::render('Website/Contact/contact');
})->name('contact');

Route::get('/ourvendors', function () {
    return Inertia::render('Website/Vendors/ourvendor');
})->name('ourvendors');

Route::get('/profile', function () {
    if (Auth::check()) {
        return redirect()->route('dashboard');
    } else {
        return Inertia::render('Website/Auth/auth');
    }
})->name('profile');

Route::get('/buyer-rfq-form', function () {
    return Inertia::render('Website/RFQ/buyerrfqform');
})->name('buyer-rfq-form');

Route::get('/compare', function () {
    return Inertia::render('Website/Product/compare');
})->name('compare-products');

Route::get('/faqs', function () {
    return Inertia::render('Website/Faqs/faqs');
})->name('faqs');

Route::get('/privacy-policy', function () {
    return Inertia::render('Website/Privacypolicy/privacypolicy');
})->name('privacypolicy');

Route::get('/terms-and-conditions', function () {
    return Inertia::render('Website/Termsandconditions/termsandconditions');
})->name('termsandconditions');


Route::get('/wishlist', function () {
    return Inertia::render('Website/Cart/wishlist');
})->name('wishlist');
// Route::get('/wishlist', [CartController::class, 'wishlistIndex'])->name('wishlist.index');
// Route::delete('/wishlist/remove/{id}', [CartController::class, 'wishlistRemove'])->name('wishlist.remove');

// Smart Redirect: If logged in → dashboard, else → signin
Route::middleware('auth')->get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');

// User dashboard (for regular users, if applicable)
Route::post('/signin', [AuthController::class, 'userLogin'])->name('signin');
Route::post('/signup', [AuthController::class, 'userRegister'])->name('signup');
Route::get('/signout', [AuthController::class, 'userLogout'])->name('signout');
// Change password
Route::post('/change-password', [AuthController::class, 'changePassword'])->name('change-password.submit');
Route::post('/profile-update', [AuthController::class, 'userUpdateProfile'])->name('profile.userUpdate');

// Admin Routes
Route::prefix('admin')->as('admin.')->group(function () {

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
        // manage products
        Route::resource('products', AdminProductController::class);
    });
    // for add or update the product colors, patterns and materials
    Route::resource('colors', ColorController::class)->except('show', 'create', 'edit');
    Route::resource('patterns', PatternController::class)->except('show', 'create', 'edit');
    Route::resource('materials', MaterialController::class)->except('show', 'create', 'edit');

    //category
    Route::resource('categories', CategoryController::class);
});

// Laravel Breeze/Sanctum auth routes
require __DIR__ . '/auth.php';
