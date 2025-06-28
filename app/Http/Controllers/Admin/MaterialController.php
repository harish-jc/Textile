<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Material;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MaterialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Material/Index', [
            'materials' => Material::latest()->get(),
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
        $request->merge([
            'name' => ucfirst(strtolower($request->name))
        ]);
        $request->validate([
            'name' => 'required|string|max:255|unique:materials,name,'
        ], [
            'name.unique' => 'This material already exists.',
        ]);

        Material::create($request->only('name'));

        return redirect()->back()->with('success', 'Material added successfully.');
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
    public function update(Request $request, Material $material)
    {
        $request->merge([
            'name' => ucfirst(strtolower($request->name))
        ]);
        $request->validate([
            'name' => 'required|string|max:255|unique:materials,name,' . $material->id,
            // 'hex_code' => 'nullable|string|max:7', // Uncomment if you want to store hex codes
        ], [
            'name.unique' => 'This material already exists.',
        ]);
        $material->update($request->only('name')); // Add 'hex_code' if needed

        return redirect()->back()->with('success', 'Material updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Material $material)
    {
        $material->delete();

        return redirect()->back()->with('success', 'Material deleted successfully.');
    }
}
