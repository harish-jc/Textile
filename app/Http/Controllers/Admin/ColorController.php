<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Color;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ColorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Color/Index', [
            'colors' => Color::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //capitalize the first letter of the color name
        $request->merge([
            'name' => ucfirst(strtolower($request->name))
        ]);
        $request->validate([
            'name' => 'required|string|max:255|unique:colors,name',
            // 'hex_code' => 'nullable|string|max:7', // Uncomment if you want to store hex codes
        ], [
            'name.unique' => 'This color already exists.',
        ]);

        Color::create($request->only('name')); // Add 'hex_code' if needed

        return redirect()->back()->with('success', 'Color added successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Color $color)
    {
        // Normalize input (e.g. "red" → "Red")
        $request->merge([
            'name' => ucfirst(strtolower($request->name)),
        ]);
        $request->validate([
            'name' => 'required|string|max:255|unique:colors,name,' . $color->id,
            // 'hex_code' => 'nullable|string|max:7', // Uncomment if you want to store hex codes
        ], [
            'name.unique' => 'This color already exists.',
        ]);
        $color->update($request->only('name')); // Add 'hex_code' if needed

        return redirect()->back()->with('success', 'Color updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Color $color)
    {
        $color->delete();

        return redirect()->back()->with('success', 'Color deleted successfully.');
    }
}
