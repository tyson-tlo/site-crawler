<?php

namespace App\Providers;

use App\Helpers\ResponseStats;
use Illuminate\Http\Client\Response;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Response::macro('stats', function () {
            return new ResponseStats($this->transferStats);
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
