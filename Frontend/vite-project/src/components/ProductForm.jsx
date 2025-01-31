import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
  });

  const [productImages, setProductImages] = useState([]);
  const [errors, setErrors] = useState({});

  // Handle input changes for text fields
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file input (image upload)
  const handleImageUpload = (e) => {
    setProductImages([...productImages, ...e.target.files]);
  };

  // Basic validation before form submission
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 3)
      newErrors.name = "Name must be at least 3 characters.";
    if (!formData.price || formData.price <= 0)
      newErrors.price = "Price must be a valid positive number.";
    if (!formData.category) newErrors.category = "Category is required.";
    if (productImages.length === 0)
      newErrors.images = "At least one image is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stop if form is invalid

    const data = new FormData();

    // Append all text fields to form data
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    // Append images to form data
    productImages.forEach((image) => {
      data.append("images", image);
    });

    try {
      const response = await fetch("http://localhost:7000/products", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const result = await response.json();
        alert("Error: " + result.message);
      } else {
        alert("Product created successfully!");
        setFormData({ name: "", description: "", price: "", category: "" });
        setProductImages([]);
        navigate("/home");
      }
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Error: An unexpected error occurred.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-xl text-white"
      >
        <h2 className="text-3xl text-center font-semibold mb-6 text-white">
          Create Product
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="text-sm font-medium">Product Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.name ? "border border-red-500" : ""
            }`}
            required
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="text-sm font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
            className={`w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.price ? "border border-red-500" : ""
            }`}
            required
          />
          {errors.price && (
            <p className="text-red-500 text-xs">{errors.price}</p>
          )}
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="text-sm font-medium">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className={`w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.category ? "border border-red-500" : ""
            }`}
            required
          />
          {errors.category && (
            <p className="text-red-500 text-xs">{errors.category}</p>
          )}
        </div>

        {/* Product Images */}
        <div className="mb-4">
          <label className="text-sm font-medium">Upload Product Images</label>
          <input
            type="file"
            multiple
            onChange={handleImageUpload}
            className={`w-full p-3 mt-1 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.images ? "border border-red-500" : ""
            }`}
            required
          />
          {errors.images && (
            <p className="text-red-500 text-xs">{errors.images}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 mt-4 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Create Product
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
