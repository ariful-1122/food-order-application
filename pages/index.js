import React from "react";
import { useSelector } from "react-redux";
import Hero from "../components/Sections/hero/Hero";
import OverviewText from "../components/Sections/overview/OverviewText";
import Products from "../components/Sections/products/Products";
import CartModal from "../components/UI/Modals/CartModal";

const Home = () => {
  const { isShown } = useSelector((state) => state.modal);
  return (
    <div>
      {isShown && <CartModal />}
      <Hero />
      <OverviewText />
      <Products />
    </div>
  );
};

export default Home;
