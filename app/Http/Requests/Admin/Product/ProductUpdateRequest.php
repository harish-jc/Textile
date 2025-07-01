<?php

namespace App\Http\Requests\Admin\Product;

use App\Enums\Unit;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductUpdateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            // 'vendor_id' => 'nullable|exists:vendors,id',
            'category_id' => 'required|exists:categories,id',
            'image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'name' => [
                'required',
                'string',
                'max:255',
            ],
            'material_id' => 'nullable|exists:materials,id',
            'color_id' => 'nullable|exists:colors,id',
            'pattern_id' => 'nullable|exists:patterns,id',
            'unit'                    => ['required', 'string', 'in:' . implode(',', array_column(Unit::cases(), 'value'))],
            'stock_quantity'          => 'required|numeric|min:0',
            'price'                   => 'required|numeric|min:0',
            'offer_price'             => 'nullable|numeric|min:0',
            'minimum_order_quantity' => 'required|numeric|min:0',
            'description' => 'nullable|string',
            'status' => 'required|in:active,inactive',
            'origin' => 'nullable|string',

            // New specifications fields
            'specifications' => ['nullable', 'array'],
            'specifications.count' => ['nullable', 'string', 'max:100'],
            'specifications.width' => ['nullable', 'string', 'max:100'],
        ];
    }

    /**
     * Get the validation messages for the defined rules.
     */
    public function messages(): array
    {
        return [
            // 'category_id.required' => 'Please select a valid category.',
            // 'category_id.exists' => 'The selected category is invalid.',

            // 'vendor_id.exists' => 'The selected vendor is invalid.',

            'image.image' => 'The uploaded file must be an image.',
            'image.mimes' => 'The image must be a file of type: jpeg, png, jpg.',
            'image.max' => 'The image size must not exceed 2MB.',
            'category_id' => 'required|exists:categories,id',

            'name.required' => 'The product name is required.',
            'name.max' => 'The product name must not exceed 255 characters.',

            'material.max' => 'Material must not exceed 100 characters.',

            'color.max'   => 'Color must not exceed 50 characters.',
            'pattern.max' => 'Pattern must not exceed 50 characters.',

            'unit.required' => 'The unit is required.',
            'unit.in'       => 'Please select a valid unit.',

            'stock_quantity.required' => 'Stock quantity is required.',
            'stock_quantity.numeric'  => 'Stock quantity must be a number.',
            'stock_quantity.min'      => 'Stock quantity cannot be negative.',

            'price.required' => 'Price is required.',
            'price.numeric'  => 'Price must be a number.',
            'price.min'      => 'Price cannot be negative.',

            'offer_price.numeric' => 'Offer price must be a number.',
            'offer_price.min'     => 'Offer price cannot be negative.',

            'minimum_order_quantity.required' => 'The minimum order quantity is required.',
            'minimum_order_quantity.numeric' => 'The minimum order quantity must be an number.',
            'minimum_order_quantity.min' => 'The minimum order quantity must be at least 1.',

            'description.string' => 'Description must be a valid text.',

            'status.required' => 'The status is required.',
            'status.in' => 'Status must be either active or inactive.',

            'specifications.count.max' => 'The count may not be greater than 100 characters.',
            'specifications.width.max' => 'The width may not be greater than 100 characters.',

        ];
    }
}
