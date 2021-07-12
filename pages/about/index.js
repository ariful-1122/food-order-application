import React from "react";
import CartModal from "../../components/UI/Modals/CartModal";
import { useSelector } from "react-redux";

const Index = () => {
  const isShown = useSelector((state) => state.modal.isShown);
  return <div>{isShown && <CartModal />}</div>;
};

export default Index;
