<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pattern extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', // Pattern name
    ];

    public function products()
    {
        return $this->hasMany(Product::class);
    }
}
