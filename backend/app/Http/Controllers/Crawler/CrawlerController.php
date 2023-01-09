<?php
namespace App\Http\Controllers\Crawler;

use App\Helpers\PageParser;
use App\Http\Controllers\Controller;
use App\Http\Requests\Crawler\StartCrawlRequest;
use App\Jobs\CrawlSite;
use App\Models\Crawl;
use GuzzleHttp\TransferStats;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

ini_set('max_execution_time', 380);

class CrawlerController extends Controller
{
    public function crawl(StartCrawlRequest $request)
    {
        $crawl = $request->user()->crawls()->create(['site_url' => $request->siteUrl, 'pages_deep' => $request->pagesDeep, 'status' => 'in_progress']);

        $parser = new PageParser($request->siteUrl, $request->siteUrl);

        $pages = $crawl->crawlPages($parser->getUniqueInternalLinks()->slice(0, $request->pagesDeep), $request->siteUrl);

        return response()->json([
            'base_url' => $parser->getBaseUrl(),
            'url' => $parser->getUrl(),
            'message' => 'Retrieved data',
            'internal_links_count' => $parser->getUniqueInternalLinksCount(),
            'internal_links' => $parser->getUniqueInternalLinks(),
            'response_time' => $parser->getResponseTime(),
            'pages' => $pages,
            'pages_count' => $pages->count(),
            'unique_images' => $parser->getUniqueImages(),
            'unique_images_count' => $parser->getUniqueImagesCount(),
            'unique_internal_links' => $parser->getUniqueInternalLinks(),
            'unique_internal_links_count' => $parser->getUniqueInternalLinksCount(),
            'unique_external_links' => $parser->getUniqueExternalLinks(),
            'unique_external_links_count' => $parser->getUniqueExternalLinksCount(),
            'average_page_load' => round($pages->avg('response_time'), 2),
            'average_word_count' => round($pages->avg('word_count')),
            'average_heading_word_count' => round($pages->avg('heading_word_count')),
            'headings' => $pages->pluck('heading')->unique()->flatten(),
        ]);
    }
}
