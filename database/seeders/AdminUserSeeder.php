<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::updateOrCreate(
            [ 'email' => 'admin@example.com' ], // condition to avoid duplicates
            [
                'name' => 'Admin User',
                'email' => 'admin@example.com',
                'password' => Hash::make('password'), // change to secure password
                'user_type' => 'admin',
                'status' => 'active',
                'phone' => '1234567890',
                'region' => 'Head Office',
                'bio' => 'This is the system administrator.',
                'city' => 'Admin City',
                'state' => 'Admin State',
                'zip_code' => '000000',
                'address_line1' => 'Admin Street',
                'address_line2' => '',
                'profile_image' => null,
            ]
        );
    }
}
