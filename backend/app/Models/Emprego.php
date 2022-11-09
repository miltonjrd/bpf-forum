<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Emprego extends Model
{
    use HasFactory;
    
    protected $table = 'TB_EMPREGOS';

    protected $fillable = [
        'EMPREGO_NOME'
    ];
}
