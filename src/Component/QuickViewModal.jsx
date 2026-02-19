import React from "react";
import { X } from "lucide-react";

const QuickViewModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60">
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-5xl mx-auto rounded-lg shadow-lg overflow-y-auto h-[95vh] md:h-[90vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          {/* Left: Product Images */}
          <div className="flex flex-col items-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-[450px] object-contain rounded"
            />
            <div className="flex gap-2 mt-4 overflow-x-auto">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="thumb"
                  className="w-20 h-20 object-cover rounded cursor-pointer border hover:border-black"
                />
              ))}
            </div>
          </div>

          {/* Right: Product Info */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold">{product.name}</h2>
            <p className="text-gray-600 mt-2">{product.description}</p>
            <div className="flex items-center gap-2 mt-3">
              <span className="text-2xl font-bold text-green-600">
                ₹{product.price}
              </span>
              <span className="line-through text-gray-400">
                ₹{product.oldPrice}
              </span>
              <span className="text-red-500">({product.discount}% OFF)</span>
            </div>

            {/* Sizes */}
            <div className="mt-4">
              <h3 className="font-medium">Select Size</h3>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border rounded hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button className="mt-6 px-6 py-3 bg-black text-white rounded hover:bg-gray-800">
              Add to Bag
            </button>

            {/* Product Details */}
            <button className="mt-4 underline text-sm text-gray-600 hover:text-black">
              Product Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
