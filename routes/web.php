<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController as User;
use App\Http\Controllers\ServicesController as Services;
use App\Http\Controllers\IndustriesController as Industries;
use App\Http\Controllers\ResourcesController as Resources;

Route::get('/', [User::class, 'homepage']);
Route::get('/about', [User::class, 'about'])->name('about');
Route::get('/teams', [User::class, 'team'])->name('team');
Route::get('/career', [User::class, 'career'])->name('career');
Route::get('/partner', [User::class, 'partner'])->name('partners');
Route::get('/press-release', [User::class, 'pressRelease'])->name('pressRelease');
Route::get('/contact', [User::class, 'contact'])->name('contact');
Route::group(['prefix' => 'services'], function () {
    Route::get('/blockchain-development', [Services::class, 'blockchainDevelopment'])->name('blockchainDevelopment');
    Route::get('/token-coin', [Services::class, 'tokenCoin'])->name('tokenCoin');
    Route::get('/ico-development', [Services::class, 'icoDevelopment'])->name('icoDevelopment');
    Route::get('/smart-contract', [Services::class, 'smartContract'])->name('smartContract');
    Route::get('/dapp-development', [Services::class, 'dappDevelopment'])->name('dappDevelopment');
    Route::get('/defi-development', [Services::class, 'defiDevelopment'])->name('defiDevelopment');
    Route::get('/cryptocurrency-exchange', [Services::class, 'cryptocurrencyExchange'])->name('cryptocurrencyExchange');
    Route::get('/cryptocurrency-bank', [Services::class, 'cryptocurrencyBank'])->name('cryptocurrencyBank');
    Route::get('/p2p-exchange', [Services::class, 'p2pExchange'])->name('p2pExchange');
    Route::get('/decentralized-exchange-development', [Services::class, 'decentralizedExchangeDevelopment'])->name('decentralizedExchangeDevelopment');
    Route::get('/cryptocurrency-mlm-software', [Services::class, 'cryptocurrencyMlmSoftware'])->name('cryptocurrencyMlmSoftware');
    Route::get('/real-estate-tokenization', [Services::class, 'realEstateTokenization'])->name('realEstateTokenization');
    Route::get('/asset-tokenization', [Services::class, 'assetTokenization'])->name('assetTokenization');
    Route::get('/gold-tokenization', [Services::class, 'goldTokenization'])->name('goldTokenization');
    Route::get('/meme-coin', [Services::class, 'memeCoin'])->name('memeCoin');
});
Route::group(['prefix' => 'industries'], function () {
    Route::get('/entertainment', [Industries::class, 'entertainment'])->name('entertainment');
    Route::get('/education', [Industries::class, 'education'])->name('education');
    Route::get('/transport-logistics', [Industries::class, 'transportLogistics'])->name('transportLogistics');
    Route::get('/supply-chain', [Industries::class, 'supplyChain'])->name('supplyChain');
    Route::get('/health-care', [Industries::class, 'healthCare'])->name('healthCare');
});
Route::group(['prefix' => 'resources'], function () {
    Route::get('/freshworks', [Resources::class, 'freshworks'])->name('freshworks');
});