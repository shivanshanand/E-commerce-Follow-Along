/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Card = ({ index, name, image, price, description, category }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    if (index) {
      navigate(`/productform/${index}`); // Navigate to edit page with product ID
    } else {
      console.error("Product ID is missing");
    }
  };

  const handleDelete = async () => {
    if (!index) {
      alert("product id is missing");
      return;
    }
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `http://localhost:7000/api/products/${index}`,
        {
          method: "DELETE",
        }
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

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl shadow-lg w-72 border border-gray-700 h-[32rem] flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Product Image */}
      <div className="h-40 w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Product Name */}
      <h2 className="text-2xl font-semibold mt-3 text-white">{name}</h2>

      {/* Price & Discount Section */}
      <div className="mt-2 flex items-center justify-center gap-2">
        <span className="text-red-400 text-xl font-bold">${price}</span>
      </div>

      {/* Category & Ratings */}
      <div className="flex justify-between mt-2 text-sm">
        <span className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full">
          {category}
        </span>
        {/* <span className="text-yellow-400 font-semibold">{ratings} ⭐</span> */}
      </div>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-300 flex-grow px-2">{description}</p>

      {/* Edit Button */}
      <button
        className="mt-4 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
        onClick={handleEdit}
      >
        Edit
      </button>

      <button
        className="mt-4 text-white bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700"
        onClick={handleDelete}
      >
        Delete
      </button>
    </motion.div>
  );
};

export default Card;
