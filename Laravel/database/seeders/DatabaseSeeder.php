<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

        \App\Models\User::factory()->create([
            'name' => 'Anas',
            'username' => 'aarbasha',
            'rouls' => "0",
            'phone' => '0967107707',
            'avatar' => "avatar",
            'email' => 'anas@laravel.com',
            'password' => bcrypt('12345678')
        ]);

        \App\Models\User::factory()->create([
            'name' => 'Anas Arbasha',
            'username' => 'admin',
            'rouls' => "1",
            'phone' => '0967107707',
            'avatar' => "avatar",
            'email' => 'admin@laravel.com',
            'password' => bcrypt('12345678')
        ]);

        \App\Models\User::factory(3)->create();
    }
}
