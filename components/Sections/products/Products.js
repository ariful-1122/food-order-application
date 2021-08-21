import React from "react";
import ProductItem from "./ProductItem";
import products from "../../../utils/data";
import { useSelector } from "react-redux";

const Products = () => {
  const keyword = useSelector((state) => state.search.keyword);
  return (
    <div>
      <ul className="product__items">
        {products
          .filter((item) =>
            keyword === ""
              ? item
              : item.name.toLowerCase().includes(keyword.toLowerCase())
          )
          .map((product) => (
            <ProductItem key={product.id} id={product.id} product={product} />
          ))}
      </ul>
    </div>
  );
};

export default Products;
