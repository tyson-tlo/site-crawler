<?php
namespace App\Services;

use App\Helpers\PageParser;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class CrawlerService
{
    private string $baseUrl;

    public function __construct(string $baseUrl)
    {
        $this->baseUrl = $baseUrl;
    }
    public function crawlPages(Collection $pages): Collection
    {
        return $pages->map(function ($page) {
            $parser = new PageParser(rtrim($this->baseUrl, '/') . $page, $this->baseUrl);

            return [
                'base_url' => $parser->getBaseUrl(),
                'url' => $parser->getUrl(),
                'response_time' => $parser->getResponseTime(),
                'internal_links_count' => $parser->getUniqueInternalLinksCount(),
                'internal_links' => $parser->getUniqueInternalLinks(),
                'external_links_count' => $parser->getUniqueExternalLinksCount(),
                'external_links' => $parser->getUniqueExternalLinks(),
                'unique_images_count' => $parser->getUniqueImagesCount(),
                'unique_images' => $parser->getUniqueImages(),
                'status_code' => $parser->getStatus(),
                'word_count' => $parser->getWordCount(),
                'heading' => $parser->getPageHeading(),
                'heading_word_count' => $parser->getPageHeadingWordLength(),
            ];
        });
    }
}
