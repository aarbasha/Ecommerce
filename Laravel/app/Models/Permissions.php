<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Roles;

class Permissions extends Model
{
    use HasFactory;

    protected $fillable = [
        'addCategories',
        'addProducts',
        'deleteCategories',
        'deleteProducts',
        'editCategories',
        'editProducts',
        'showCategories',
        'showProducts',
    ];

    protected $with = ['Roles'];


    public function Roles()
    {
        return $this->belongsTo(Roles::class, 'role_id', 'id');
    }
}
