<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Main category : fabrics
        $fabrics = Category::create([
            'name' => 'Fabrics',
            'slug' => Str::slug('Fabrics'),
        ]);
        $natural = Category::create([
            'name' => 'Natural Fabrics',
            'slug' => Str::slug('Natural Fabrics'),
            'parent_id' => $fabrics->id,
        ]);

        Category::insert([
            [
                'name' => 'Cotton',
                'slug' => 'cotton',
                'parent_id' => $natural->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Silk',
                'slug' => 'silk',
                'parent_id' => $natural->id,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jute',
                'slug' => 'jute',
                'parent_id' => $natural->id,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        $synthetic = Category::create([
            'name' => 'Synthetic Fabrics',
            'slug' => 'synthetic-fabrics',
            'parent_id' => $fabrics->id,
        ]);

        Category::create([
            'name' => 'Polyester',
            'slug' => 'polyester',
            'parent_id' => $synthetic->id,
        ]);

        // Sarees
        $sarees = Category::create([
            'name' => 'Sarees',
            'slug' => 'sarees',
        ]);

        $tamil = Category::create([
            'name' => 'Tamil Nadu',
            'slug' => 'tamil-nadu',
            'parent_id' => $sarees->id,
        ]);

        Category::create([
            'name' => 'Kanchipuram',
            'slug' => 'kanchipuram',
            'parent_id' => $tamil->id,
        ]);
    }
}
