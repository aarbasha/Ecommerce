<?php


use Illuminate\Http\Request;
use App\Http\Middleware\JWTAuthMiddleware;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\Api\CategoriesController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\TestController;
use App\Http\Controllers\Api\PostController;

//###############################################################################
//Auth
Route::group([
    'middleware' => 'api',
    // 'prefix' => 'auth'
], function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
});
//###############################################################################
// Users
Route::middleware([JWTAuthMiddleware::class])->group(function () {
    //all users
    Route::get('/users', [AdminController::class, 'index']);
    //single users
    Route::get('/user/{id}', [AdminController::class, 'User']);
    //create user
    Route::post('/add-user', [AdminController::class, 'store']);
    //update user
    Route::post('/user/{id}/up', [AdminController::class, 'update']);
    //deleted user
    Route::post('/user/{id}', [AdminController::class,  'destroy']);
});
//###############################################################################
// Categories
Route::middleware([JWTAuthMiddleware::class])->group(function () {
    //all categories
    Route::get('/categories', [CategoriesController::class, 'index']);

    Route::get('/categories/{id}', [CategoriesController::class, 'GetCountProdact']);
    //single categorie
    Route::get('/categorie/{id}', [CategoriesController::class, 'categorie']);
    //create categorie
    Route::post('/add-categorie', [CategoriesController::class, 'store']);
    //update categorie
    Route::post('/categorie/{id}/up', [CategoriesController::class, 'update']);
    //deleted categorie
    Route::post('/categorie/{id}', [CategoriesController::class,  'destroy']);
});
//###############################################################################
// Product
// Route::middleware([JWTAuthMiddleware::class])->group(function () {
    //all products
    Route::get('/products', [ProductController::class, 'index']);
    //single product
    Route::get('/product/{id}', [ProductController::class, 'product']);
    //create product
    Route::post('/add-product/', [ProductController::class, 'store']);
    //update product
    Route::post('/product/{id}/up', [ProductController::class, 'update']);
    //deleted product
    Route::post('/product/{id}', [ProductController::class,  'destroy']);

    // Route::get('/test' ,[ProductController::class, 'test']);
    Route::post('/deleteImageProducts/{id}', [ProductController::class,  'DeleteImage']);
// });
//###############################################################################

Route::middleware([JWTAuthMiddleware::class])->group(function () {
    //all products
    Route::get('/posts', [PostController::class, 'index']);
    //single product
    Route::get('/post/{id}', [PostController::class, 'post']);
    //create product
    Route::post('/add-post', [PostController::class, 'store']);
    //update product
    Route::post('/post/{id}/up', [PostController::class, 'update']);
    //deleted product
    Route::post('/post/{id}', [PostController::class,  'destroy']);
});

Route::post('/uplode', [TestController::class, 'uplodeMulteFiles']);

Route::get('/test/{id}', [CategoriesController::class, 'test']);

Route::get('/testtest', [CategoriesController::class, 'testtest']);
