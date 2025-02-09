import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { Nav } from "./Nav";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:7000/api/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mt-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Welcome to the Home Page!
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Check out our amazing products below:
        </p>

        <button
          onClick={() => navigate("/productform")}
          className="mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition-all duration-300"
        >
          Create Product
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 w-full max-w-6xl">
          {products.map((item, index) => (
            <Card
              key={index}
              index={item._id}
              name={item.name}
              price={item.price}
              category={item.category}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
