<?php

namespace App\Models;

use App\Services\CrawlerService;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Collection;

class Crawl extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function pages(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(CrawlPage::class);
    }

    private function crawlerService(string $baseUrl): CrawlerService
    {
        return new CrawlerService($baseUrl);
    }

    public function crawlPages(Collection $pages, string $baseUrl): Collection
    {
        return $this->crawlerService($baseUrl)->crawlPages($pages);
    }
}
