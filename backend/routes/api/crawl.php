<?php
use App\Http\Controllers\Crawler\CrawlerController;

Route::post('/', [CrawlerController::class, 'crawl']);
