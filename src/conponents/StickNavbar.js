import React, { useState, useEffect } from "react";

function StickNavbar() {
  const [stickyClass, setStickyClass] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // console.log(windowHeight);
      windowHeight > 150
        ? setStickyClass(!stickyClass)
        : setStickyClass(stickyClass);
    }
  };

  const stickybarContent = (
    <div className="sticky-nav">
      <ul>
        <li>
          <a href="#product-description">商品介紹</a>
        </li>
        <li>
          <a href="#ship-info">運費與其他資訊</a>
        </li>
        <li>
          <a href="#review-info">購買評價</a>
        </li>
      </ul>
      <div className="small-btn">
        <span className="collect-btn">
          <i className="fa-solid fa-heart"></i>收藏商品
        </span>
        <span className="add-btn">
          <i className="fa-solid fa-cart-shopping"></i>放入購物車
        </span>
      </div>
    </div>
  );

  return <>{stickyClass && stickybarContent}</>;
}

export default StickNavbar;
