<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Product;
use App\Models\Post;

class Image extends Model
{
    use HasFactory;

    protected $table = 'images';
    protected $fillable = [
        'image', 'product_id'
    ];
    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function posts()
    {
        return $this->belongsTo(Post::class);
    }
}
