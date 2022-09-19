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
        Schema::create('permissions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('role_id')->constrained('roles')->onDelete('cascade');
            $table->boolean('addCategories')->default(0);
            $table->boolean('addProducts')->default(0);
            $table->boolean('deleteCategories')->default(0);
            $table->boolean('deleteProducts')->default(0);
            $table->boolean('editCategories')->default(0);
            $table->boolean('editProducts')->default(0);
            $table->boolean('showCategories')->default(0);
            $table->boolean('showProducts')->default(0);
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
        Schema::dropIfExists('permissions');
    }
};
