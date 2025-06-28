<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\ProductStoreRequest;
use App\Http\Requests\Admin\Product\ProductUpdateRequest;
use App\Models\Category;
use App\Models\Color;
use App\Models\Material;
use App\Models\Pattern;
use Illuminate\Support\Facades\Redirect;
use App\Models\Product;
use Illuminate\Contracts\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = Product::with(['material', 'color', 'pattern','category'])
            ->when(
                $request->filled('search'),
                fn(Builder $query) => $query->where('name', 'like', '%' . $search = $request->input('search') . '%')
            )
            ->latest()
            ->paginate(10);

        $materials = Material::orderBy('name')->get();
        $colors = Color::orderBy('name')->get();
        $patterns = Pattern::orderBy('name')->get();
        $categories = Category::with('children')->whereNull('parent_id')->orderBy('name')->get();

        return Inertia::render('Product/List', [
            'products' => $products,
            'materials' => $materials,
            'colors' => $colors,
            'patterns' => $patterns,
            'categories' => $categories,
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
    public function store(ProductStoreRequest $request)
    {
        Product::create($request->validated());

        return Redirect::route('admin.products.index')
            ->with('success', 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ProductUpdateRequest $request, Product $product)
    {
        $product->update($request->validated());
        return Redirect::route('admin.products.index')
            ->with('success', 'Product updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return Redirect::route('admin.products.index')
            ->with('success', 'Product deleted successfully.');
    }
}
