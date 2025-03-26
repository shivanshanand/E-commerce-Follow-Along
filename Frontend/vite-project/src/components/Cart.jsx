import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CartPage = () => {
  const [cart, setCart] = useState({ items: [] });
  const email = "test@gmail.com"; // Test email for fetching cart
  const navigate = useNavigate(); // Navigation hook

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await axios.get(
        `http://localhost:7100/api/cart/items?email=${email}`
      );
      setCart(response.data);
    } catch (error) {
      console.error("Error fetching cart:", error.response?.data?.message);
      setCart({ items: [] }); // Ensure cart is empty instead of breaking
    }
  };

  const updateQuantity = async (productId, action) => {
    try {
      await axios.put("http://localhost:7100/api/cart/update", {
        email,
        productId,
        action,
      });
      fetchCart();
    } catch (error) {
      console.error("Error updating quantity:", error.response?.data?.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button */}
      <button
        onClick={() => navigate("/home")}
        className="text-gray-700 hover:text-gray-900 flex items-center ml-[-24rem] mt-[-1rem]"
      >
        <span className="text-3xl mr-2">⬅</span>
      </button>

      <h2 className="text-2xl font-semibold mb-6 text-center">🛒 Your Cart</h2>

      {cart.items.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.items.map((item) => (
            <div
              key={item.productId._id}
              className="flex items-center justify-between border p-4 rounded-lg shadow-md bg-white"
            >
              {/* Product Image */}
              <img
                src={item.productId.images[0]}
                alt={item.productId.name}
                className="w-16 h-16 object-cover rounded-lg"
              />

              {/* Product Details */}
              <div className="flex-1 ml-4">
                <p className="font-semibold">{item.productId.name}</p>
                <p className="text-gray-600">
                  ${item.productId.price.toFixed(2)}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateQuantity(item.productId._id, "decrease")}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
                >
                  -
                </button>
                <span className="text-lg font-semibold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.productId._id, "increase")}
                  className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
