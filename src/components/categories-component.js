import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const CategoriesComponent = (props) => {
  const { Images } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const preventRefresh = (e) => {
    e.preventDefault();
  };

  // Auto Change Images
  useEffect(() => {
    const IntervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  const changePage = (num) => {
    setCurrentPage(num);
  };

  return (
    <div>
      <div className="introImage">
        <img src={Images[currentIndex]} alt="" />
      </div>

      {/* Item Categories */}
      <div className="itemCategoriesString">
        <p>商品分類 / 所有商品</p>
      </div>

      <div className="section">
        <div className="itemCategories">
          <a href="" onClick={preventRefresh}>
            <img src={require("../photo/fire-icon.png")} alt="" />
            <p>所有商品</p>
          </a>
          <a href="" onClick={preventRefresh}>
            <img src={require("../photo/block.png")} alt="" />
            <p>實用道具</p>
          </a>
          <a href="" onClick={preventRefresh}>
            <img src={require("../photo/mario-hat.png")} alt="" />
            <p>百變服裝</p>
          </a>
          <a href="" onClick={preventRefresh}>
            <img src={require("../photo/monster-icon.png")} alt="" />
            <p>怪物收藏</p>
          </a>
          <a href="" onClick={preventRefresh}>
            <img src={require("../photo/coin-icon.png")} alt="" />
            <p>購物商城</p>
          </a>
        </div>
        {/* item Images */}
        <div className="container">
          <h2>所有商品</h2>
          <div className="itemImages">
            {/* Page 1 */}
            {currentPage == 1 && (
              <div className="item">
                <img src={require("../photo/warp-pipe.png")} alt="" />
                <br />
                <p>未知的水管</p>
                <br />
                <p className="price">520金幣</p>
              </div>
            )}
            {currentPage == 1 && (
              <div className="item">
                <img src={require("../photo/blue-mushroom.png")} alt="" />
                <br />
                <p>藍色縮小蘑菇</p>
                <br />
                <p className="price">1000金幣</p>
              </div>
            )}
            {currentPage == 1 && (
              <div className="item">
                <img src={require("../photo/red-mushroom.png")} alt="" />
                <br />
                <p>紅色長大蘑菇</p>
                <br />
                <p className="price">1000金幣</p>
              </div>
            )}
            {currentPage == 1 && (
              <div className="item">
                <img src={require("../photo/coin.png")} alt="" />
                <br />
                <p>瑪利歐貨幣</p>
                <br />
                <p className="price">10金幣</p>
              </div>
            )}
            {currentPage == 1 && (
              <div className="item">
                <img src={require("../photo/penguin-clothe.png")} alt="" />
                <br />
                <p>企鵝套裝</p>
                <br />
                <p className="price">650金幣</p>
              </div>
            )}
            {currentPage == 1 && (
              <div className="item">
                <img src={require("../photo/Kuba.png")} alt="" />
                <br />
                <p>庫巴公仔</p>
                <br />
                <p className="price">3500金幣</p>
              </div>
            )}
            {currentPage == 1 && (
              <div className="item">
                <img src={require("../photo/turtle-monster.png")} alt="" />
                <br />
                <p>烏龜公仔</p>
                <br />
                <p className="price">2000金幣</p>
              </div>
            )}
            {currentPage == 1 && (
              <div className="item">
                <img src={require("../photo/block.png")} alt="" />
                <br />
                <p>神秘的方塊</p>
                <br />
                <p className="price">350金幣</p>
              </div>
            )}
            {currentPage == 1 && (
              <div className="item">
                <img src={require("../photo/boom.png")} alt="" />
                <br />
                <p>炸彈公仔</p>
                <br />
                <p className="price">1000金幣</p>
              </div>
            )}
            {/* Page 2 */}
            {currentPage == 2 && (
              <div className="item">
                <img src={require("../photo/daisy-egg.png")} alt="" />
                <br />
                <p>耀西的蛋</p>
                <br />
                <p className="price">1200金幣</p>
              </div>
            )}
            {currentPage == 2 && (
              <div className="item">
                <img src={require("../photo/flower-monster.png")} alt="" />
                <br />
                <p>食人花公仔</p>
                <br />
                <p className="price">2200金幣</p>
              </div>
            )}
            {currentPage == 2 && (
              <div className="item">
                <img src={require("../photo/fly-turtle.png")} alt="" />
                <br />
                <p>飛天烏龜公仔</p>
                <br />
                <p className="price">2000金幣</p>
              </div>
            )}
            {currentPage == 2 && (
              <div className="item">
                <img src={require("../photo/green-mushroom.png")} alt="" />
                <br />
                <p>綠色生命蘑菇</p>
                <br />
                <p className="price">1000金幣</p>
              </div>
            )}
            {currentPage == 2 && (
              <div className="item">
                <img src={require("../photo/hammer-clothe.png")} alt="" />
                <br />
                <p>鐵鎚套裝</p>
                <br />
                <p className="price">650金幣</p>
              </div>
            )}
            {currentPage == 2 && (
              <div className="item">
                <img src={require("../photo/many-coin.png")} alt="" />
                <br />
                <p>1000金幣</p>
                <br />
                <p className="price">9000金幣</p>
              </div>
            )}
            {currentPage == 2 && (
              <div className="item">
                <img src={require("../photo/mario-hat.png")} alt="" />
                <br />
                <p>瑪利歐的帽子</p>
                <br />
                <p className="price">1300金幣</p>
              </div>
            )}
            {currentPage == 2 && (
              <div className="item">
                <img src={require("../photo/mushroom-monster.png")} alt="" />
                <br />
                <p>蘑菇怪收藏</p>
                <br />
                <p className="price">300金幣</p>
              </div>
            )}
            {currentPage == 2 && (
              <div className="item">
                <img src={require("../photo/phoenix-clothe.png")} alt="" />
                <br />
                <p>鳳凰套裝</p>
                <br />
                <p className="price">1100金幣</p>
              </div>
            )}
            {/* Page 3 */}
            {currentPage == 3 && (
              <div className="item">
                <img src={require("../photo/propeller-mushroom.png")} alt="" />
                <br />
                <p>竹蜻蜓蘑菇</p>
                <br />
                <p className="price">1000金幣</p>
              </div>
            )}
            {currentPage == 3 && (
              <div className="item">
                <img src={require("../photo/squirrel-clothe.png")} alt="" />
                <br />
                <p>狸貓套裝</p>
                <br />
                <p className="price">650金幣</p>
              </div>
            )}
            {currentPage == 3 && (
              <div className="item">
                <img src={require("../photo/star.png")} alt="" />
                <br />
                <p>無敵星星</p>
                <br />
                <p className="price">2300金幣</p>
              </div>
            )}
            {currentPage == 3 && (
              <div className="item">
                <img src={require("../photo/turtle-clothe.png")} alt="" />
                <br />
                <p>烏龜套裝</p>
                <br />
                <p className="price">1200金幣</p>
              </div>
            )}
            {currentPage == 3 && (
              <div className="item">
                <img src={require("../photo/turtle-monster.png")} alt="" />
                <br />
                <p>紅烏龜公仔</p>
                <br />
                <p className="price">1350金幣</p>
              </div>
            )}
          </div>

          <div className="changePageButton">
            <button onClick={() => changePage("1")}>1</button>
            <button onClick={() => changePage("2")}>2</button>
            <button onClick={() => changePage("3")}>3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesComponent;
