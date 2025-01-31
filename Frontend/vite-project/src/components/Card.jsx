import { motion } from "framer-motion";

const Card = ({
  name,
  image,
  prevPrice,
  currPrice,
  description,
  category,
  ratings,
  discount,
  inStock,
}) => {
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
        <span className="text-gray-400 line-through text-lg">${prevPrice}</span>
        <span className="text-green-400 text-xl font-bold">${currPrice}</span>
      </div>

      {/* Category & Ratings */}
      <div className="flex justify-between mt-2 text-sm">
        <span className="bg-gray-800 text-gray-200 px-3 py-1 rounded-full">
          {category}
        </span>
        <span className="text-yellow-400 font-semibold">{ratings} ⭐</span>
      </div>

      {/* Description */}
      <p className="mt-2 text-sm text-gray-300 flex-grow px-2">{description}</p>

      {/* Discount Badge */}
      {discount > 0 && (
        <p className="mt-2 text-sm bg-green-600 text-white px-3 py-1 rounded-full text-center">
          {discount}% OFF
        </p>
      )}

      {/* Stock Status */}
      <div className="mt-auto">
        <p
          className={`px-4 py-2 text-sm font-medium rounded-full text-center ${
            inStock ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          {inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
