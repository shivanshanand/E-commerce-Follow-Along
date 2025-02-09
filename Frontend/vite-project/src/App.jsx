import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ProductForm from "./components/ProductForm";
import Cart from "./components/Cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/productform" element={<ProductForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/productform/:id" element={<ProductForm />} />
      </Routes>
    </Router>
  );
};

export default App;
