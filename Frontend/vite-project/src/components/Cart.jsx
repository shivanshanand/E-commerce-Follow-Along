import React from "react";

const Cart = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      {/* Cart Items Placeholder */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg">
          <div>
            <h3 className="font-semibold text-lg">Product Name</h3>
            <p className="text-sm text-gray-400">Price: $0.00</p>
            <p className="text-sm text-gray-400">Quantity: 1</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold">$0.00</span>
            <button className="text-red-500 hover:text-red-700">Remove</button>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg">
          <div>
            <h3 className="font-semibold text-lg">Product Name</h3>
            <p className="text-sm text-gray-400">Price: $0.00</p>
            <p className="text-sm text-gray-400">Quantity: 1</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg font-semibold">$0.00</span>
            <button className="text-red-500 hover:text-red-700">Remove</button>
          </div>
        </div>
      </div>

      {/* Total */}
      <div className="mt-6 text-center">
        <h3 className="text-2xl font-semibold">Total: $0.00</h3>
      </div>

      {/* Checkout Button */}
      <div className="mt-6 flex justify-center">
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
