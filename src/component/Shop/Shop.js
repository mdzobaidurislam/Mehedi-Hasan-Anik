import React, { useEffect, useState } from "react";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // const handleAddToCart = (product) => {
  //   console.log(product);
  //   const newCart = [...cart, product];
  //   setCart(newCart);
  // };

  const handleAddToCart = (product) => {
    const newItems = [...cart, product];
    setCart(newItems);
    addToDb(product.id);
  };
  console.log(cart);

  return (
    <div className="shop-container">
      {/* start product container */}
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      {/* end product container */}

      {/* start cart container */}
      <div className="cart-container">
        <Cart totalItems={cart} />
      </div>
      {/* end cart container */}
    </div>
  );
};

export default Shop;
