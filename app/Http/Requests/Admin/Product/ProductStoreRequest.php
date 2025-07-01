<?php

namespace App\Http\Requests\Admin\Product;

use App\Enums\Unit;
use Illuminate\Foundation\Http\FormRequest;

class ProductStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            // 'vendor_id' => 'nullable|exists:vendors,id',
            'category_id' => 'required|exists:categories,id',

            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'name' => 'required|string|max:255',

            // new: foreign keys
            'material_id' => 'nullable|exists:materials,id',
            'color_id' => 'nullable|exists:colors,id',
            'pattern_id' => 'nullable|exists:patterns,id',

            'unit' => ['required', 'string', 'in:' . implode(',', array_column(Unit::cases(), 'value'))],
            'stock_quantity' => 'required|numeric|min:0',
            'price' => 'required|numeric|min:0',
            'offer_price' => 'nullable|numeric|min:0',
            'minimum_order_quantity' => 'required|numeric|min:0', // allow decimal if needed
            'description' => 'nullable|string',
            'status' => 'required|in:active,inactive',
            'origin' => 'nullable|string',

            // New specifications fields
            'specifications' => ['nullable', 'array'],
            'specifications.count' => ['nullable', 'string', 'max:100'],
            'specifications.width' => ['nullable', 'string', 'max:100'],
        ];
    }

    public function messages(): array
    {
        return [
            // 'vendor_id.exists' => 'The selected vendor does not exist.',
            // 'category_id.exists' => 'The selected category is invalid.',

            'image.image' => 'The uploaded file must be an image.',
            'image.mimes' => 'The image must be a file of type: jpeg, png, jpg.',
            'image.max' => 'The image size must not exceed 2MB.',
            'category_id' => 'required|exists:categories,id',

            'name.required' => 'The product name is required.',
            'name.max' => 'The product name must not exceed 255 characters.',

            'material_id.exists' => 'The selected material is invalid.',
            'color_id.exists' => 'The selected color is invalid.',
            'pattern_id.exists' => 'The selected pattern is invalid.',

            'unit.required' => 'The unit is required.',
            'unit.in' => 'Please select a valid unit.',

            'stock_quantity.required' => 'Stock quantity is required.',
            'stock_quantity.numeric' => 'Stock quantity must be a number.',
            'stock_quantity.min' => 'Stock quantity cannot be negative.',

            'price.required' => 'Price is required.',
            'price.numeric' => 'Price must be a number.',
            'price.min' => 'Price cannot be negative.',

            'offer_price.numeric' => 'Offer price must be a number.',
            'offer_price.min' => 'Offer price cannot be negative.',

            'minimum_order_quantity.required' => 'The minimum order quantity is required.',
            'minimum_order_quantity.numeric' => 'Minimum order quantity must be a number.',
            'minimum_order_quantity.min' => 'Minimum order quantity must be at least 0.01.',

            'status.required' => 'The product status is required.',
            'status.in' => 'The status must be either active or inactive.',

            'specifications.count.max' => 'The count may not be greater than 100 characters.',
            'specifications.width.max' => 'The width may not be greater than 100 characters.',
        ];
    }
}
