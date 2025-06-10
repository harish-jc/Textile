<?php

namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class File implements CastsAttributes
{

	public function __construct(
		public string $folderName,
		public string $disk = 'images'
	) {}

	/**
	 * Cast the given value.
	 *
	 * @param  array<string, mixed>  $attributes
	 */
	public function get(Model $model, string $key, mixed $value, array $attributes): mixed
	{
		if ($value) {
			return Storage::disk($this->disk)->url($value);
		} else {
			return null;
		}
	}

	/**
	 * Prepare the given value for storage.
	 *
	 * @param  array<string, mixed>  $attributes
	 */
	public function set(Model $model, string $key, mixed $value, array $attributes): mixed
	{
		if ($value instanceof UploadedFile) {
			return $value->store($this->folderName, ['disk' => $this->disk]);
		}
		return $value;
	}
}
