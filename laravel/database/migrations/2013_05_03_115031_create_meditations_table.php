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
    Schema::create('meditations', function (Blueprint $table) {
      $table->id();
      $table->foreignId('author_id')
        ->references('id')
        ->on('users')
        ->onDelete('cascade');
      $table->string('title');
      $table->string('file_path');
      $table->string('description');
      $table->date('published_date')->nullable();
      $table->bigInteger('total_saved')->nullable();
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
    Schema::dropIfExists('meditations');
  }
};
