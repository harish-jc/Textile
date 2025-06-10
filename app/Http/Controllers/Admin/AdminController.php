<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function editProfile()
    {
        // dd('AdminController@editProfile called');
        return Inertia::render('Admin/Profile', [
            'user' => auth()->user()
        ]);
    }

    public function updateProfile(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255'],
            'password' => ['nullable', 'confirmed', 'min:8'],
            'phone' => ['nullable', 'string', 'max:15'],
            'address' => ['nullable', 'string', 'max:255'],
            'region' => ['nullable', 'string', 'max:100'],
            'profile_image' => ['nullable', 'image', 'max:2048'],
        ]);

        $user = auth()->user();

        $user->update($request->only('name', 'email', 'phone', 'address', 'region'));

        if ($request->hasFile('profile_image')) {
            if ($user->profile_image) {
                \Storage::disk('public')->delete($user->profile_image);
            }

            $path = $request->file('profile_image')->store('profile_images', 'public');
            $user->update(['profile_image' => $path]);
        }

        if ($request->filled('password')) {
            $user->update(['password' => bcrypt($request->password)]);
        }

        return back()->with('success', 'Profile updated successfully.');
    }
}
