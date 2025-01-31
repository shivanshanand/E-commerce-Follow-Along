import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import products from "../db/products";

const Home = () => {
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/product-form");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center px-4">
      {/* Animated Heading */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mt-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to the Home Page!
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-gray-400 mt-4 text-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Check out our amazing products below:
      </motion.p>

      {/* Create Product Button */}
      <motion.button
        onClick={handleclick}
        className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Create Product
      </motion.button>

      {/* Product Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {products.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            prevPrice={item.prevPrice}
            currPrice={item.currPrice}
            description={item.description}
            ratings={item.ratings}
            image={item.image}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Home;
