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

    public function collection($title)
    {
        // Define collection data
        $collections = [
            'gujarat' => [
                [
                    'id' => 1,
                    'name' => "Black Bandhanii Pattern Digital Print Muslin Fabric",
                    'price' => '₹223',
                    'image' => '/storage/img/products/product-1-5.png'
                ],
                [
                    'id' => 2,
                    'name' => "Dark Green And Blush Red Bandhanii Pattern Digital Print Kota Doria Fabric",
                    'price' => '₹249',
                    'image' => '/storage/img/products/product-1-6.png'
                ],
                [
                    'id' => 3,
                    'name' => "Royal Blue And Green Bandhanii Pattern Digital Print Kota Doria Fabric",
                    'price' => '₹219',
                    'image' => '/storage/img/products/product-1-7.png'
                ],
                [
                    'id' => 4,
                    'name' => "MarinBrick Red Plain Cotton Linen Shirting Fabric",
                    'price' => '₹499',
                    'image' => '/storage/img/products/product-1-8.png'
                ],
            ],
            'hyderabad' => [
                [
                    'id' => 1,
                    'name' => "Prismatic Red Ajrakh Printed Cotton Fabric",
                    'price' => '₹220',
                    'image' => '/storage/img/products/product-1-1.png'
                ],
                [
                    'id' => 2,
                    'name' => "Vermilllion Orange Ajrakh Printed Cotton Fabric",
                    'price' => '₹259',
                    'image' => '/storage/img/products/product-1-2.png'
                ],
                [
                    'id' => 3,
                    'name' => "Auburn Maroon Ajrakh Printed Cotton Fabric",
                    'price' => '₹299',
                    'image' => '/storage/img/products/product-1-3.png'
                ],
                [
                    'id' => 4,
                    'name' => "Marine Blue Ajrakh Printed Cotton Fabric",
                    'price' => '₹220',
                    'image' => '/storage/img/products/product-1-4.png'
                ],
            ]
        ];

        // Default to Hyderabad if title not found
        $data = $collections[strtolower($title)] ?? $collections['hyderabad'];

        return Inertia::render('Website/Product/collection', [
            'title' => ucfirst($title),
            'products' => $data,
        ]);
    }
}
