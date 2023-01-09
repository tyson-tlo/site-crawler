<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Foundation\Auth\User;
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
        $user = User::create([
            'name' => ' Agency Analytics',
            'email' => 'info@agencyanalytics.com',
            'password' => Hash::make('$2y$10$lPIz6bqYpI1ioGDottRpg.aDhOHYNrjJDTVQOzabwUDH44s86Fq/.'),
            'email_verified_at' => now(),
        ]);

        return Command::SUCCESS;
    }
}
