<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;

class Categories extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'info', 'cover', "name_folder"
    ];

    

    public function Product()
    {
        return $this->hasMany(Product::class);
    }
}
