import React, { useEffect } from "react";
import Link from "next/link";
import NavLink from "next/link";
import HeaderCartButton from "../UI/HeaderCartButton/HeaderCartButton";
import { useSelector } from "react-redux";

const MainNavigation = () => {
  
  const items = useSelector((state) => state.cart.items);
  const totalQty = items.reduce((currNum, item) => {
    return currNum + item.qty;
  }, 0);

  

  return (
    <header className="header">
      <div>
        <Link href="/">
          <a className="header__logo">
            <img src="/images/LOGOS/6.png" />
          </a>
        </Link>
      </div>

      <div className="header__search">
        <input placeholder="Search anything" type="text" />
        <button> 🔍 </button>
      </div>

      <nav className="header__nav">
        <ul className="header__nav-lists">
          <li className="header__nav-list">
            <Link href="/">
              <a className="header__nav-link header__nav-link-active">Home</a>
            </Link>
          </li>
          <li className="header__nav-list">
            <Link href="/about">
              <a className="header__nav-link"> About</a>
            </Link>
          </li>
          <li className="header__nav-list">
            <Link href="/contact">
              <a className="header__nav-link">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      <HeaderCartButton qty={totalQty} />
    </header>
  );
};

export default MainNavigation;
