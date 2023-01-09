<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CrawlPage extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $casts = ['unique_internal_links' => 'array'];

    public function crawl()
    {
        return $this->belongsTo(Crawl::class);
    }

    public function storeResponseBody($response_body)
    {
        $uuid = (string) Str::uuid();
        $url = Storage::put("crawls/{$this->crawl->id}/{$uuid}.html", $response_body);

        $this->update(['response_body_location' => $url]);

        return $this;
    }

    public function setUniqueInternalLinks(array $links)
    {
        $this->update(['unique_internal_links' => $links]);

        return $this;
    }
}
