import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userId } = useParams(); // Assuming userId is passed in URL parameters

  // Fetch the cart data from the backend
  useEffect(() => {
    const fetchCart = async () => {
      console.log("userId:", userId);

      try {
        const response = await fetch(
          `http://localhost:7100/api/cart?userId=${userId}`
        );
        const data = await response.json();
        if (response.ok) {
          setCart(data.cart);
        } else {
          console.error("Error fetching cart:", data.message);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
        setLoading(false);
      }
    };

    fetchCart();
  }, [userId]);

  // Handle increasing the quantity of a product
  const handleIncreaseQuantity = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:7100/api/cart/increase-quantity`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            productId,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setCart(data.cart); // Update the cart state with the new cart data
      } else {
        console.error("Error increasing quantity:", data.message);
      }
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  // Handle decreasing the quantity of a product
  const handleDecreaseQuantity = async (productId) => {
    try {
      const response = await fetch(
        `http://localhost:7100/api/cart/decrease-quantity`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
            productId,
          }),
        }
      );
      const data = await response.json();
      if (response.ok) {
        setCart(data.cart); // Update the cart state with the new cart data
      } else {
        console.error("Error decreasing quantity:", data.message);
      }
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };

  // Handle removing a product from the cart
  const handleRemoveProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:7100/api/cart/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          productId,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setCart(data.cart); // Update the cart state with the new cart data
      } else {
        console.error("Error removing product:", data.message);
      }
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  // Display loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Display empty cart message
  if (!cart || cart.items.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 py-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Your Cart</h2>

      {/* Cart Items */}
      <div className="space-y-4 mb-8">
        {cart.items.map((item) => (
          <div
            key={item.productId._id}
            className="flex items-center justify-between bg-gray-800 p-4 rounded-lg shadow-lg"
          >
            <div>
              <h3 className="font-semibold text-lg">{item.productId.name}</h3>
              <p className="text-sm text-gray-400">
                Price: ${item.productId.price}
              </p>
            </div>

            {/* Quantity controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleDecreaseQuantity(item.productId._id)}
                className="text-gray-400 hover:text-gray-200"
                disabled={item.quantity <= 1} // Disable "-" button if quantity is 1
              >
                -
              </button>
              <span className="text-lg font-semibold">{item.quantity}</span>
              <button
                onClick={() => handleIncreaseQuantity(item.productId._id)}
                className="text-gray-400 hover:text-gray-200"
              >
                +
              </button>
              <span className="text-lg font-semibold">${item.totalPrice}</span>
            </div>

            {/* Remove Product Button */}
            <button
              onClick={() => handleRemoveProduct(item.productId._id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-6 text-center">
        <h3 className="text-2xl font-semibold">Total: ${cart.totalAmount}</h3>
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
