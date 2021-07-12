import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../Card/Card";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
} from "../../../redux/constants/cart/cart";

const CartModal = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const modalCloseHandler = () => {
    dispatch({ type: "HIDE_CART_MODAL" });
  };

  const productIncreaseHandler = (item) => {
    dispatch({
      type: CART_ADD_ITEM,
      item: { ...item, qty: 1 },
    });
  };

  const decreaseHandler = (id) => {
    dispatch({
      type: CART_REMOVE_ITEM,
      id: id,
    });
  };

  return (
    <>
      <div onClick={modalCloseHandler} className="backdrop"></div>
      <div>
        <Card className="cart-modal">
          <ul className="cart-modal__items">
            {items.map((item) => (
              <li key={item.id} className="cart-modal__item">
                <div className="cart-modal__item-info">
                  <h5> {item.name} </h5>
                  <p>Price: ${item.price}</p>
                </div>
                <p className="cart-modal__item-quantity">{item.qty}X</p>
                <div className="cart-modal__item-actions">
                  <button onClick={decreaseHandler.bind(null, item.id)}>
                    {" "}
                    &#8722;{" "}
                  </button>
                  <button onClick={() => productIncreaseHandler(item)}>
                    &#43;
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-modal__totals">
            <div className="cart-modal__total-amounts">
              <h4>Total Amounts:</h4>
              <p>${totalAmount.toFixed(2)}</p>
            </div>
            <div className="cart-modal__total-actions">
              <button
                className="cart-modal__total-actions-1"
                onClick={modalCloseHandler}
              >
                Close
              </button>
              {items.length !== 0 && (
                <button className="cart-modal__total-actions-2">Order</button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default CartModal;
