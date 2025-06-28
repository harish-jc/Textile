import React, { useState } from 'react';
import { X } from 'lucide-react';

const SearchOverlay = ({ isOpen, onClose }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.search.value;
    console.log('Search:', query);
    onClose();
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-6">
      <button onClick={onClose} className="absolute top-6 right-6 text-gray-700">
        <X size={28} />
      </button>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <input
          name="search"
          type="text"
          autoFocus
          placeholder="Search for sarees, fabrics..."
          className="w-full border-b text-2xl py-2 focus:outline-none"
        />
      </form>
    </div>
  );
};

export default SearchOverlay;
