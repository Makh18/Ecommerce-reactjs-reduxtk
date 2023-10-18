import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
//import {productsFetch} from "../Slices/productsSlice"
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { addToCart } from "../Slices/cartSlice";
import { useNavigate } from 'react-router-dom';
import { useGetProductsQuery } from "../Slices/productsApi "


import { Link } from "react-router-dom";

const Products = () => {
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  //const { items: products, status } = useSelector((state) => state.products);
  //const [data, setData] = useState(products);

 // useEffect(()=>{
   // dispatch(productsFetch());
    //setFilter(products);
  //},[products, dispatch]);
    //console.log(products);
    const {
      data: products,
      isLoading,
      isSuccess,
      isError,
      error
    } = useGetProductsQuery({ refetchOnMountOrArgChange: true })
    console.log(products)
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        navigateTo("/cart")
      };
    

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
        <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
          <Skeleton height={592} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = products.filter((item) => item.category === cat);
    setFilter(updatedList);
  }
  const ShowProducts = () => {
    return (
      <>
             

      <div className="container-button">
        <div className="buttons text-center py-5">
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(products)}>All</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>
        </div>
        {filter.map((product) => {
          return (
            <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
              <div className="card text-center h-100" key={product.id}>
                <img
                  className="card-img-top p-3"
                  src={product.image}
                  alt="Card"
                  height={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 12)}...
                  </h5>
                  <p className="card-text">
                    {product.description.substring(0, 90)}...
                  </p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item lead">$ {product.price}</li>
                  {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                </ul>
                <div className="card-body">
                  
                  <button className="btn btn-danger m-1"  onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {isLoading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
      
    </>
  );
};

export default Products;