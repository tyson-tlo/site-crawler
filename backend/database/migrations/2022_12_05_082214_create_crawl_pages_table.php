<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('crawl_pages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('crawl_id')->constrained('crawls')->cascadeOnDelete();
            $table->string('page_url');
            $table->string('response_body_location')->nullable();
            $table->text('unique_internal_links')->nullable();
            $table->text('unique_external_links')->nullable();
            $table->text('unique_image_links')->nullable();
            $table->integer('page_load_speed_ms')->nullable();
            $table->integer('http_response_code')->nullable();
            $table->integer('word_count')->nullable();
            $table->text('titles')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('crawl_pages');
    }
};
