<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $this->call([
            // Add your seeders here
            // CategorySeeder::class,
            MaterialSeeder::class,
            ColorSeeder::class,
            PatternSeeder::class,
        ]);
    }

    // tinker
    //      User::create([                                                                                                               
    //      'name' => 'Admin',                                                                                                       
    //      'email' => 'admin@gmail.com',                                                                                            
    //      'password' => '12345678', // will be hashed automatically                                                                
    //      'user_type' => 'admin',                                                                                                  
    //      'phone' => '9876543218',                                                                                                 
    //      'address' => 'Madurai',                                                                                                  
    //      'region' => 'IN',                                                                                                        
    //      'status' => 'active',                                                                                                    
    //  ]);   
}
