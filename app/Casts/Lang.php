<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;

class Lang implements CastsAttributes
{
	public static $data;

	public function __construct()
	{
		// dd($this, static::$data);
	}
	/**
	 * Cast the given value.
	 *
	 * @param  array<string, mixed>  $attributes
	 */
	public function get(Model $model, string $key, mixed $value, array $attributes): mixed
	{
		// if ($key == 'content') {
		// dd($key,$attributes);
		// }
		$columName = self::$data[get_class($model)][$key][app()->getLocale()];
		// if ($key == 'content') {

		//     dd($columName);
		// }
		return $attributes[$columName] ?? null;
	}

	/**
	 * Prepare the given value for storage.
	 *
	 * @param  array<string, mixed>  $attributes
	 */
	public function set(Model $model, string $key, mixed $value, array $attributes): mixed
	{
		return $value;
	}
}
