<?php

namespace App\Http\Controllers\Cart;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CartController extends Controller
{
    public function index()
    {
        $cart = session()->get('cart', []);
        return Inertia::render('Website/Cart/cart', ['cartItems' => $cart]);
    }

    // public function add(Request $request)
    // {
    //     $product = $request->only('id', 'name', 'price', 'image');
    //     $cart = session()->get('cart', []);

    //     // If already in cart, increase quantity
    //     if (isset($cart[$product['id']])) {
    //         $cart[$product['id']]['quantity'] += 1;
    //     } else {
    //         $product['quantity'] = 1;
    //         $cart[$product['id']] = $product;
    //     }

    //     session()->put('cart', $cart);

    //     return redirect()->back()->with('success', 'Added to cart!');
    // }
    public function add(Request $request)
    {
        $productId = $request->input('id');
        $quantity = $request->input('quantity', 1); // Default to 1 if not sent

        $product = $request->only('id', 'name', 'price', 'image');
        $cart = session()->get('cart', []);

        if (isset($cart[$productId])) {
            $cart[$productId]['quantity'] += $quantity;
        } else {
            $product['quantity'] = $quantity;
            $cart[$productId] = $product;
        }

        session()->put('cart', $cart); 
        return redirect()->route('cart.index');
    }


    public function update(Request $request)
    {
        $id = $request->input('id');
        $quantity = $request->input('quantity');
        $cart = session()->get('cart', []);

        if (isset($cart[$id])) {
            $cart[$id]['quantity'] = $quantity;
            session()->put('cart', $cart);
        }

        return back();
    }

    public function remove(Request $request)
    {
        $id = $request->input('id');
        $cart = session()->get('cart', []);

        if (isset($cart[$id])) {
            unset($cart[$id]);
            session()->put('cart', $cart);
        }

        return back();
    }
}
