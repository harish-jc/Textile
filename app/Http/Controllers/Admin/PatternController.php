<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Pattern;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PatternController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Pattern/Index', [
            'patterns' => Pattern::latest()->get(),
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
            'name' => 'required|string|max:255|unique:patterns,name',
        ], [
            'name.unique' => 'This pattern already exists.',
        ]);

        Pattern::create($request->only('name'));

        return redirect()->back()->with('success', 'Pattern added successfully.');
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
    public function update(Request $request, Pattern $pattern)
    {
        //capitalize the first letter of the pattern name
        $request->merge([
            'name' => ucfirst(strtolower($request->name))
        ]);
        $request->validate(
            [
                'name' => 'required|string|max:255|unique:patterns,name,' . $pattern->id,
            ],
            [
                'name.unique' => 'This pattern already exists.',
            ]
        );
        $pattern->update($request->only('name'));

        return redirect()->back()->with('success', 'Pattern updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pattern $pattern)
    {
        $pattern->delete();

        return redirect()->back()->with('success', 'Pattern deleted successfully.');
    }
}
