<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('home');
});
Route::get('/contact', function () {
    return view('contact');
});
Route::get('/about', function () {
    return view('about');
});
Route::get('/gallery', function () {
    return view('gallery');
});
Route::get('/adoption', function () {
    return view('adoption');
});
Route::get('/our-services', function () {
    return view('our-services');
});
Route::get('/services-pet-hotel', function () {
    return view('services-pet-hotel');
});
Route::get('/our-team', function () {
    return view('our-team');
});
Route::get('/testi', function () {
    return view('testi');
});
Route::get('/pricing-table', function () {
    return view('pricing-table');
});

