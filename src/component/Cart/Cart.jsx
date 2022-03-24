import React from "react";

const Cart = (props) => {
  const { totalItems } = props;

  let price = 0;
  let shipping = 0;
  for (const item of totalItems) {
    price = price + item.price;
    shipping = shipping + item.shipping;
  }
  const tax = price * (10 / 100);
  const totalPrice = price + shipping + tax;

  return (
    <div>
      <h2>This is summary</h2>
      <p>
        seleted items: <span id="cart">{totalItems.length}</span>{" "}
      </p>
      <h2>Price: {price}</h2>
      <h2>Shipping: {shipping}</h2>
      <h2>Tax 10%: {tax}</h2>
      <h2>Total Price: {totalPrice}</h2>
    </div>
  );
};

export default Cart;
