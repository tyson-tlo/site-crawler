<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;

class PopulateTestData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:data';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Populate suite of test data';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        User::factory()->create(['email' => 'tyson@modcul.com']);

        return Command::SUCCESS;
    }
}
