<?php

namespace App\Jobs;

use App\Models\Crawl;
use App\Models\CrawlPage;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Http;

class CrawlSite implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $crawl;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(Crawl $crawl)
    {
        $this->crawl = $crawl;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $response = Http::get($this->crawl->site_url);

        $page = $this->crawl->pages()->create(['page_url' => $this->crawl->site_url]);

        $response->body();
    }
}
