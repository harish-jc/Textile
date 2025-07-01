<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('vendor_id')->nullable();
            $table->unsignedBigInteger('category_id')->nullable();

            $table->string('image')->nullable();
            $table->string('name', 255)->unique();
            $table->unsignedBigInteger('material_id')->nullable();
            $table->unsignedBigInteger('color_id')->nullable();
            $table->unsignedBigInteger('pattern_id')->nullable();

            $table->enum('unit', ['meter', 'kg'])->default('meter');

            $table->decimal('stock_quantity', 10, 2)->default(0);
            $table->decimal('price', 10, 2);
            $table->decimal('offer_price', 10, 2)->nullable();
            $table->decimal('minimum_order_quantity', 10, 2)->default(1);

            $table->text('description')->nullable();
            $table->string('origin')->nullable();
            $table->json('specifications')->nullable();

            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();

            // Optional: foreign keys
            // $table->foreign('vendor_id')->references('id')->on('users')->onDelete('set null');
            // $table->foreign('category_id')->references('id')->on('categories')->onDelete('set null');
            // $table->foreign('material_id')->references('id')->on('materials')->onDelete('set null');
            // $table->foreign('color_id')->references('id')->on('colors')->onDelete('set null');
            // $table->foreign('pattern_id')->references('id')->on('patterns')->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
