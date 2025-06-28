<?php

namespace Database\Seeders;

use App\Models\Pattern;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PatternSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $patterns = ['Plain', 'Striped', 'Checked', 'Floral', 'Polka Dot', 'Geometric', 'Paisley', 'Printed', 'Abstract'];

        foreach ($patterns as $pattern) {
            Pattern::firstOrCreate(['name' => $pattern]);
        }
    }
}
