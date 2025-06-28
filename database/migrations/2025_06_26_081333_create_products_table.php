<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
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

            $table->decimal('stock_quantity', 10, 2)->default(0);             // total available quantity
            $table->decimal('price', 10, 2);                                  // per unit price
            $table->decimal('offer_price', 10, 2)->nullable();                // optional discounted price
            $table->decimal('minimum_order_quantity', 10, 2)->default(1);     // e.g. 0.5m

            $table->text('description')->nullable();

            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
            // Add foreign keys if you want:
            // $table->foreign('vendor_id')->references('id')->on('users')->onDelete('set null');
            // $table->foreign('category_id')->references('id')->on('categories')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};

// php artisan migrate --path=database/migrations/2025_06_26_081333_create_products_table.php
// php artisan migrate:rollback --path=database/migrations/2025_06_26_081333_create_products_table.php

