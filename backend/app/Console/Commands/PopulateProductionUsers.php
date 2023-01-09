<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class PopulateProductionUsers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'prod:users';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Populate users for production';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        User::where('email', 'info@agencyanalytics.com')->delete();

        $user = User::create([
            'name' => ' Agency Analytics',
            'email' => 'info@agencyanalytics.com',
            'password' => Hash::make('$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi'),
            'email_verified_at' => now(),
        ]);

        return Command::SUCCESS;
    }
}
