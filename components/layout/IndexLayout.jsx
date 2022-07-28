import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "../../sass/main.scss";

import Header from "./Header/Header.jsx";
import Footer from "./Footer/Footer.jsx";

function IndexLayout({ children, page }) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Header classes={page == "faqs" ? "peach" : ""}></Header>
      <main>{children}</main>
      <Footer dark={page && page === "home"}></Footer>
    </>
  );
}

export default IndexLayout;
