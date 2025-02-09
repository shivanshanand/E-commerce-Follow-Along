import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Helmet Store</h3>
            <p className="text-sm mb-4">
              Your one-stop shop for all kinds of helmets. We provide quality
              and safety to ensure a smooth and secure ride.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF
                  className="text-gray-400 hover:text-blue-600"
                  size={20}
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter
                  className="text-gray-400 hover:text-blue-400"
                  size={20}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram
                  className="text-gray-400 hover:text-pink-500"
                  size={20}
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn
                  className="text-gray-400 hover:text-blue-700"
                  size={20}
                />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/home" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/productform"
                  className="text-gray-400 hover:text-white"
                >
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                  to="#my-products"
                  className="text-gray-400 hover:text-white"
                >
                  My Products
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-white">
                  Cart
                </Link>
              </li>
              <li>
                <Link to="#about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-sm mb-4">
              Get the latest updates and promotions directly to your inbox.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md w-64 text-gray-900"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-sm">
                <strong>Email:</strong> support@helmetstore.com
              </li>
              <li className="text-sm">
                <strong>Phone:</strong> (123) 456-7890
              </li>
              <li className="text-sm">
                <strong>Address:</strong> 123 Helmet St, Helmet City, HC 12345
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-gray-800 text-center py-4 mt-3">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Helmet Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
