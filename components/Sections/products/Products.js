import React from "react";
import ProductItem from "./ProductItem";
import products from "../../../utils/data";

const Products = () => {
  return (
    <div>
      <ul className="product__items">
        {products.map((product) => (
          <ProductItem key={product.id} id={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default Products;
