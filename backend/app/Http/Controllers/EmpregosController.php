<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Emprego;

class EmpregosController extends Controller
{
    public function getAll() {
        return response()->json(Emprego::all());
    }
}
