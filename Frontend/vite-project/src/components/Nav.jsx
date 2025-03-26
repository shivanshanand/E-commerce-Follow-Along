import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);


  // Toggle the hamburger menu
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-bold">HEMLET STORE</div>

        <div className="lg:hidden" onClick={toggleMenu}>
          <GiHamburgerMenu className="w-8 h-8 text-white cursor-pointer" />
        </div>
      </div>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } lg:flex gap-6 justify-center mt-4 lg:mt-0`}
      >
        <li className="nav-link text-white cursor-pointer">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-link text-white cursor-pointer">
          <Link to="/productform">Add Product</Link>
        </li>
        <li className="nav-link text-white cursor-pointer">
          <Link to="#my-products">My Products</Link>
        </li>
        <li className="nav-link text-white cursor-pointer">
          <Link to={`/cart`}>Cart</Link>
        </li>
      </div>
    </div>
  );
};
