import React, { useState } from "react";

const ProductItemForm = (props) => {
  const [productQty, setProductQty] = useState(1);
  const [isValid, setIsValid] = useState(true);

  const increaseHandler = () => {
    setProductQty((prev) => prev + 1);
  };

  const decreaseHandler = () => {
    if (productQty > 1) {
      setProductQty((prev) => prev - 1);
    }
  };

  const addToCartHandler = (e) => {
    e.preventDefault();
    const amount = Number(productQty);

    if (productQty.length === 0 || amount < 1 || amount > 5) {
      setIsValid(false);
      return;
    }

    props.onAddHandler(amount);
  };

  return (
    <div className="product__addCart">
      <form onSubmit={addToCartHandler} className="product__addCart-form">
        <div className="product__addCart-input">
          <button
            onClick={decreaseHandler}
            type="button"
            className="product__addCart-input--inc"
          >
            -
          </button>
          <input
            type="number"
            value={productQty}
            onChange={(e) => setProductQty(e.target.value)}
          />
          {!isValid && <p>Please Enter valid amount 1-5</p>}
          <button
            onClick={increaseHandler}
            type="button"
            className="product__addCart-input--dec"
          >
            +
          </button>
        </div>
        <div className="product__addCart-button">
          <button type="submit">Add To Cart</button>
        </div>
      </form>
    </div>
  );
};

export default ProductItemForm;
