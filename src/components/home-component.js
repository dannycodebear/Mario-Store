import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// 引入圖片 自動變換
import Mario from "../photo/Mario.png";
import Koopa from "../photo/koopa.png";
import Luigi from "../photo/Luigi.png";
import Peach from "../photo/Peach.png";

const HomeComponent = () => {
  const Images = [Mario, Koopa, Luigi, Peach];
  const [currentIndex, setCurrentIndex] = useState(0);
  // Auto Change Images
  useEffect(() => {
    const IntervalId = setInterval(() => {
      setCurrentIndex((prevCurrentImage) =>
        prevCurrentImage === Images.length - 1 ? 0 : prevCurrentImage + 1
      );
    }, 4000);

    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  return (
    <div className="homePage">
      <div className="bar">
        <ul>
          <li>
            <Link to="/">實用道具</Link>
          </li>
          <li>
            <Link to="/">百變服裝</Link>
          </li>
          <li>
            <Link to="/">怪物收藏</Link>
          </li>
          <li>
            <Link to="/">購物商城</Link>
          </li>
        </ul>
      </div>
      <div className="introImage">
        <img src={Images[currentIndex]} alt="" />
      </div>
    </div>
  );
};

export default HomeComponent;
