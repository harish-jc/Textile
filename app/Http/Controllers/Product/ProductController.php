<?php

namespace App\Http\Controllers\Product;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProductController extends Controller
{
    public function show($id)
    {
        // You can fetch real data here from DB
        $product = [
            'id' => $id,
            'name' => 'Jute Fabric ' . $id,
            'price' => '₹1,000',
            'image' => '/storage/img/products/f-product-1-2.png',
            'description' => 'This is a detailed description of the product.',
            'address' => '123 Sample Street, Sample City, Sample State, 123456',
            'rating' => 4.5,
        ];

        return Inertia::render('Website/Product/show', [
            'product' => $product
        ]);
    }

}
