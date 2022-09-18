<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Image;
use App\Models\Categories;

class Product extends Model
{
    use HasFactory;

    protected $table = 'products';
    protected $fillable = [
        'name', 'discription', 'cover'
    ];

    public function images()
    {
        return $this->hasMany(Image::class, 'product_id');
    }


    protected $with = ['categories'];

    public function Categories()
    {
        return $this->belongsTo(Categories::class, 'Categorie_id', 'id');
    }
}
