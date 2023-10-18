import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Product from "./components/Product";
//import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart";
import Login from "./pages/Login";
import About from "./pages/About";
import  Products from "./pages/Products";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/products" element={<Products/>} />

          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
