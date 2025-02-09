/* eslint-disable react/prop-types */
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
      alert("Product ID is missing");
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
    <div className="bg-gray-800 p-4 rounded-xl shadow-lg w-72 h-[32rem] flex flex-col border border-gray-700">
      {/* Product Image */}
      <div className="h-40 w-full mb-3">
        <img
          src={image}
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
