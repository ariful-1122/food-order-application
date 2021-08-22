import React from "react";
import CartModal from "../../components/UI/Modals/CartModal";
import { useSelector } from "react-redux";

const Index = () => {
  const isShown = useSelector((state) => state.modal.isShown);
  return (
    <div>
      {isShown && <CartModal />}
      <h1>Working...</h1>
    </div>
  );
};

export default Index;
