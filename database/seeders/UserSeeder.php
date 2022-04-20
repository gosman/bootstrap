<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::table('Users')->insert([
            [
                'id' => 1,
                'name' => 'Admin User',
                'job_title' => 'Developer',
                'email' => 'admin@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('Passw0rd'),
                'role_id' => 1,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
            [
                'id' => 2,
                'name' => 'Ordinary User',
                'job_title' => 'Manager',
                'email' => 'user@example.com',
                'email_verified_at' => now(),
                'password' => Hash::make('Passw0rd'),
                'role_id' => 2,
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now(),
            ],
        ]);
    }

}
