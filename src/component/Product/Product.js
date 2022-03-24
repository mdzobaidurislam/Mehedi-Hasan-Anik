import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { product, addToCart } = props;
  const { img, name, price, ratings, seller } = props.product;

  return (
    <div className="main-container">
      <div className="image">
        <img src={img} alt="" />
        <h2>{name}</h2>
      </div>

      <div className="detail-container">
        <p>Price:{price}</p>
        <p>Seller:{seller}</p>
        <p>Rating: {ratings} stars</p>
      </div>
      <button onClick={() => addToCart(product)} className="btn">
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
