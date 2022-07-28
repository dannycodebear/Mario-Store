import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HomeComponent = (props) => {
  const { Images } = props;
  const { itemsPreview } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  // Auto Change Images
  useEffect(() => {
    const IntervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
    }, 1000);

    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  // Auto Change Items Preview
  useEffect(() => {
    const IntervalId = setInterval(() => {
      setCurrentItemIndex((prev) => (prev === itemsPreview.length - 1 ? 0 : prev + 1));
    }, 2000);

    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  return (
    <div className="homePage">
      <div className="bar">
        <ul>
          {currentIndex == 0 && (
            <li>
              <Link to="/">實用道具</Link>
            </li>
          )}
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
      {/* Item Categories */}
      <div>
        <h2>商品分類</h2>
      </div>
      <div className="itemCategories">
        <a href="">
          <img src={require("../photo/fire-icon.png")} alt="" />
          <p>暢銷商品</p>
        </a>
        <a href="">
          <img src={require("../photo/block.png")} alt="" />
          <p>實用道具</p>
        </a>
        <a href="">
          <img src={require("../photo/mario-hat.png")} alt="" />
          <p>百變服裝</p>
        </a>
        <a href="">
          <img src={require("../photo/monster-icon.png")} alt="" />
          <p>怪物收藏</p>
        </a>
        <a href="">
          <img src={require("../photo/coin-icon.png")} alt="" />
          <p>購物商城</p>
        </a>
      </div>
      {/* Items Preview */}
      <div>
        <h2>商品預覽</h2>
      </div>
      <div className="itemsPreview">
        {/* item 1 */}
        <div className="item">
          <img src={itemsPreview[currentItemIndex]} alt="" />
          <br />
          <p>紅色長大蘑菇</p>
          <br />
          <p className="price">1000金幣</p>
          <br />
          <div>
            <a href="">瞭解更多</a>
            <a href="">加入購物車</a>
          </div>
        </div>
        {/* item 2 */}
        <div className="item">
          <img src={require("../photo/block.png")} alt="" />
          <br />
          <p>神秘的方塊</p>
          <br />
          <p className="price">350金幣</p>
          <br />
          <div>
            <a href="">瞭解更多</a>
            <a href="">加入購物車</a>
          </div>
        </div>
        {/* item 3 */}
        <div className="item">
          <img src={require("../photo/warp-pipe.png")} alt="" />
          <br />
          <p>未知的水管</p>
          <br />
          <p className="price">520金幣</p>
          <br />
          <div>
            <a href="">瞭解更多</a>
            <a href="">加入購物車</a>
          </div>
        </div>
        {/* item 4 */}
        <div className="item">
          <img src={require("../photo/coin.png")} alt="" />
          <br />
          <p>瑪利歐通用貨幣</p>
          <br />
          <p className="price">10金幣</p>
          <br />
          <div>
            <a href="">瞭解更多</a>
            <a href="">加入購物車</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
