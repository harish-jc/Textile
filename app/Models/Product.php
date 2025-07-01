<?php

namespace App\Models;

use App\Casts\File;
use App\Enums\Unit;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'vendor_id',
        'category_id',
        'image',
        'name',
        'material_id',
        'color_id',
        'pattern_id',
        'unit',                    // e.g. "meter", "kg"
        'stock_quantity',          // as a decimal
        'price',                   // per unit price
        'offer_price',             // per unit price if discounted
        'minimum_order_quantity',  // smallest purchasable amount (e.g. 0.5m)
        'description',
        'status',
        'origin',
        'specifications',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'image'                  => File::class . ':products',
        'stock_quantity'         => 'decimal:2',
        'price'                  => 'decimal:2',
        'offer_price'            => 'decimal:2',
        'minimum_order_quantity' => 'decimal:2',
        'unit' => Unit::class, // Enum for unit of measurement
        'specifications' => 'array',
    ];

    public function color()
    {
        return $this->belongsTo(Color::class);
    }

    public function pattern()
    {
        return $this->belongsTo(Pattern::class);
    }

    public function material()
    {
        return $this->belongsTo(Material::class);
    }
    /**
     * Get the vendor (user) who owns this product.
     */
    // public function vendor()
    // {
    //     return $this->belongsTo(User::class, 'vendor_id');
    // }

    /**
     * Get the category for this product.
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function specifications()
    {
        return $this->hasMany(ProductSpecification::class);
    }

    /**
     * Get all carts that contain this product.
     */
    // public function carts()
    // {
    //     return $this->hasMany(Cart::class);
    // }

    /**
     * Get all order details for this product.
     */
    // public function orderDetails()
    // {
    //     return $this->hasMany(OrderDetail::class);
    // }
}
