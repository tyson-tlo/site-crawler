<?php
namespace App\Helpers;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class PageParser
{
    private string $baseUrl;
    private string $url;
    private $response;
    private $imageFileExtensions = ['.jpeg', '.jpg', '.gif', '.png', '.bmp', '.svg'];
    private $excludeExtensions = ['.woff', '.woff2', '.json', '#', '.css'];
    private ?string $htmlBody;
    private ? Collection $uniqueLinks;
    private ? Collection $uniqueImages;
    private ? Collection $uniqueInternalLinks;
    private ? Collection $uniqueExternalLinks;
    private ?float $responseTime;
    private ?string $heading;



    public function __construct(string $url, string $baseUrl)
    {
        $start = microtime(true);
        $response = Http::get($url);
        $end = microtime(true);

        $this->url = $url;
        $this->baseUrl = $baseUrl;
        $this->responseTime = round($end - $start, 2);
        $this->response = $response;
        $this->htmlBody = $response->body();

        $this->setUniqueLinks()
            ->setUniqueImages()
            ->setUniqueExternalLinks()
            ->setUniqueInternalLinks()
            ->setPageHeading();
    }

    public function getBaseUrl(): string
    {
        return $this->baseUrl;
    }

    public function getUrl(): string
    {
        return $this->url;
    }

    public function getResponseTime(): float
    {
        return $this->responseTime;
    }

    public function getStatus(): int
    {
        return $this->response->status();
    }

    private function setUniqueLinks(): self
    {
        preg_match_all('/href=["\']?([^"\'>]+)["\']?|"https:(.*?)"/', $this->htmlBody, $match);
        if (is_array($match) && is_array([$match[1]])) {
            $this->uniqueLinks = collect(array_unique($match[1]))->map(function ($url) {
                return trim($url);
            });
        }

        return $this;
    }

    private function setUniqueImages(): self
    {
        preg_match_all('/"(.*?)"/', $this->htmlBody, $match);

        $this->uniqueImages = collect($match[1])->filter(function ($imageUrl) {
            return Str::of($imageUrl)->contains($this->imageFileExtensions);
        })->unique()->flatten();

        return $this;
    }

    public function getUniqueImages(): Collection
    {
        return $this->uniqueImages;
    }

    public function getUniqueImagesCount(): int
    {
        return $this->uniqueImages->count();
    }

    public function getUniqueLinks(): Collection
    {
        return $this->uniqueLinks;
    }

    private function setUniqueInternalLinks(): self
    {
        $this->uniqueInternalLinks = $this->uniqueLinks->filter(function ($link) {
            $str = Str::of($link);
            return (
                !$str->contains(["https://", "http://"]) &&
                !$str->contains($this->imageFileExtensions) &&
                !$str->contains($this->excludeExtensions) &&
                !in_array($str->value, ['/', $this->baseUrl])
            );
        })->unique()->flatten();

        return $this;
    }

    public function getUniqueInternalLinks(): Collection
    {
        return $this->uniqueInternalLinks;
    }

    public function getUniqueInternalLinksCount(): int
    {
        return $this->uniqueInternalLinks->count();
    }

    public function setUniqueExternalLinks(): self
    {
        $this->uniqueExternalLinks = $this->uniqueLinks->filter(function ($link) {
            $str = Str::of($link);
            return (
                !$str->contains($this->baseUrl) &&
                !$str->contains(rtrim($this->baseUrl, '/')) &&
                $str->contains(["https://", "http://"]) &&
                !$str->contains($this->imageFileExtensions)
            );
        })->unique()->flatten();

        return $this;
    }

    public function getUniqueExternalLinks(): Collection
    {
        return $this->uniqueExternalLinks;
    }

    public function getUniqueExternalLinksCount(): int
    {
        return $this->uniqueExternalLinks->count();
    }

    public function getResponseTimeInMs(): float
    {
        return $this->response->stats()->totalTimeToResponseMs();
    }

    public function setPageHeading(): self
    {
        preg_match_all("/<h1?.*?>(.*?)<\/h1>/", $this->htmlBody, $matches);
        $this->heading = str_replace("&nbsp;", " & ", strip_tags($matches[1][0] ?? ""));

        return $this;
    }

    public function getPageHeading(): string
    {
        return $this->heading;
    }

    public function getPageHeadingWordLength(): int
    {
        return Str::of($this->heading)->length();
    }

    public function getWordCount(): int
    {
        return str_word_count(strip_tags(strtolower($this->htmlBody)));
    }

}
