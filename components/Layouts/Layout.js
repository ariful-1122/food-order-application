import React from "react";
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="layout">
      <div className="navigation-wrapper">
        <MainNavigation />
      </div>
      <main className="main">{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
