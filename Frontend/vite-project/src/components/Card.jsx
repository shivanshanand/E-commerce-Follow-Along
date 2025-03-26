/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Card = ({ index, name, images, price, description, category }) => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0); // Track quantity in UI
  const email = "test@gmail.com"; // Replace with dynamic user email if available

  const handleEdit = () => {
    if (index) {
      navigate(`/productform/${index}`);
    } else {
      console.error("Product ID is missing");
    }
  };

  const handleDelete = async () => {
    if (!index) {
      alert("Product ID is missing");
      return;
    }
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:7100/api/products/${index}`,
        { method: "DELETE" }
      );
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        window.location.reload();
      } else {
        console.error("Delete failed:", data.message);
        alert("Failed to delete product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("An error occurred while deleting the product.");
    }
  };

  const updateQuantity = async (action) => {
    try {
      const response = await axios.put(
        "http://localhost:7100/api/cart/update",
        {
          email,
          productId: index, // Ensure you're sending the correct productId
          action,
        }
      );

      console.log(response.data.message); // Log success message

      // Update UI quantity based on action
      if (action === "increase") {
        setQuantity((prev) => prev + 1);
      } else if (action === "decrease") {
        setQuantity((prev) => Math.max(prev - 1, 0)); // Prevent negative quantity
      }
    } catch (error) {
      console.error("Error updating cart:", error.response?.data?.message);
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg w-72 h-[34rem] flex flex-col border border-gray-700">
      {/* Product Image */}
      <div className="h-40 w-full mb-3">
        <img
          src={images}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Product Name */}
      <h2 className="text-2xl font-semibold text-white">{name}</h2>

      {/* Price */}
      <div className="mt-2 text-red-400 text-xl font-bold">${price}</div>

      {/* Category */}
      <div className="mt-2 text-sm">
        <span className="bg-gray-600 text-gray-200 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-300 flex-grow px-2">{description}</p>

      {/* Quantity Controls */}
      <div className="flex items-center justify-between mt-4">
        <button
          className="text-white bg-red-600 px-3 py-1 rounded-lg hover:bg-red-700"
          onClick={() => updateQuantity("decrease")}
          disabled={quantity === 0}
        >
          -
        </button>
        <span className="text-lg font-semibold text-white">{quantity}</span>
        <button
          className="text-white bg-green-600 px-3 py-1 rounded-lg hover:bg-green-700"
          onClick={() => updateQuantity("increase")}
        >
          +
        </button>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex gap-2">
        <button
          className="text-white bg-blue-700 px-4 py-2 rounded-lg hover:bg-blue-800"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button
          className="text-white bg-red-700 px-4 py-2 rounded-lg hover:bg-red-800"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
