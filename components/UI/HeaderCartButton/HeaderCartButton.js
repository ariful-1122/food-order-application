import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const HeaderCartButton = (props) => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [isBump, setIsBump] = useState(false);
  const cartHandler = () => {
    dispatch({ type: "SHOW_CART_MODAL" });
  };

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsBump(true);
    const timer = setTimeout(() => {
      setIsBump(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      onClick={cartHandler}
      className={`header__cart_button ${isBump && "bump"}`}
    >
      <span className="header__cart_button-icon">🛒</span>
      <span className="header__cart_button-text"> Your Cart </span>
      <span className="header__cart_button-amount"> {props.qty} </span>
    </button>
  );
};

export default HeaderCartButton;
