import React from "react";
import Card from "../../UI/Card/Card";
import Link from "next/link";
import ProductItemForm from "./ProductItemForm";
import { CART_ADD_ITEM } from "../../../redux/constants/cart/cart";
import { useDispatch } from "react-redux";
// import Image from "next/image";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { id, name, price, img } = props.product;

  const productAddCartHandler = (qty) => {
    dispatch({
      type: CART_ADD_ITEM,
      item: {
        id: id,
        name: name,
        price: price,
        qty: qty,
      },
    });
  };

  return (
    <>
      <li className="product__item">
        <Card className="product__item-card">
          <Link href="/contact">
            <a className="product__item-img">
              <img src={img} alt={img} />
            </a>
          </Link>
          <div className="product__item-info">
            <h4>{name}</h4>
            <p>Price: ${price}</p>
          </div>
          <ProductItemForm onAddHandler={productAddCartHandler} />
        </Card>
      </li>
    </>
  );
};

export default ProductItem;
