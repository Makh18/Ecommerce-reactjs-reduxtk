import React from "react";
import Navbar from "./Navbar";
import Product from "./Product";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="herosection">
      <div className="centertext">
      <h1>
      New Collection for everyone
      </h1>
      </div>  
      </div>
      <Product/>
      <Footer/>
    </>
  );
};

export default Home;