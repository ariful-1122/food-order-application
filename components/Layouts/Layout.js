import React from "react";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <div className="layout">
      <MainNavigation />
      <main className="main">{props.children}</main>
    </div>
  );
};

export default Layout;
