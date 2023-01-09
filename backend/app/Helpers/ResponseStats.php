<?php

namespace App\Helpers;


use GuzzleHttp\TransferStats;

class ResponseStats
{
    protected $transferStats;

    public function __construct(TransferStats $transferStats)
    {
        $this->transferStats = $transferStats;
    }

    public function totalTimeToResponseMs(): int
    {
        return round($this->transferStats->getHandlerStat('total_time_us') / 1000);
    }
}
