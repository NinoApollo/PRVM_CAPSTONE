<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function loadRoles() {
        $roles = Role::where('tbl_roles.is_deleted', false)
            ->get();

        return response()->json([
            'roles' => $roles
        ], 200);
    }

    public function storeRole(Request $request) {
        $validated = $request->validate([
            'role' => ['required', 'min:3', 'max:30']
        ]);

        Role::create([
            'role' => $validated['role']
        ]);

        return response()->json([
            'message' => 'Role Successfully Saved.'
        ], 200);
    }
}
