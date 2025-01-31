import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ProductForm from "./components/ProductForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product-form" element={<ProductForm />} />
      </Routes>
    </Router>
  );
};

export default App;
