import React, { useState, useEffect } from "react";
import ItemService from "../service/items.service";

const HomeComponent = (props) => {
  let [itemData, setItemData] = useState([]);
  const { Images } = props;
  const { itemsPreview } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  // Auto Change Images
  useEffect(() => {
    const IntervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev === Images.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  // Auto Change Items Preview
  useEffect(() => {
    const IntervalId = setInterval(() => {
      setCurrentItemIndex((prev) => (prev === 4 ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(IntervalId);
    };
  }, []);

  useEffect(() => {
    console.log("Using effect");
    ItemService.get().then((data) => {
      console.log(data.data);
      setItemData(data.data);
    });
  }, []);

  return (
    <div className="homePage">
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
        {currentItemIndex == 0 && (
          <div className="item">
            <img src={require("../photo/red-mushroom.png")} alt="" />
            <br />
            <p>紅色長大蘑菇</p>
            <br />
            <p className="price">1000金幣</p>
            <br />
            <div>
              <a href="https://www.youtube.com/">瞭解更多</a>
              <a href="">加入購物車</a>
            </div>
          </div>
        )}

        {/* item 2 */}
        {currentItemIndex < 2 && (
          <div className="item">
            <img src={require("../photo/block.png")} alt="" />
            <br />
            <p>神秘的方塊</p>
            <br />
            <p className="price">350金幣</p>
            <br />
            <div>
              <a href="https://www.facebook.com/">瞭解更多</a>
              <a href="">加入購物車</a>
            </div>
          </div>
        )}

        {/* item 3 */}
        {currentItemIndex < 3 && (
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
        )}

        {/* item 4 */}
        {currentItemIndex < 4 && (
          <div className="item">
            <img src={require("../photo/coin.png")} alt="" />
            <br />
            <p>瑪利歐貨幣</p>
            <br />
            <p className="price">10金幣</p>
            <br />
            <div>
              <a href="">瞭解更多</a>
              <a href="">加入購物車</a>
            </div>
          </div>
        )}

        {/* item 5 */}
        {currentItemIndex > 0 && (
          <div className="item">
            <img src={require("../photo/penguin-clothe.png")} alt="" />
            <br />
            <p>企鵝套裝</p>
            <br />
            <p className="price">650金幣</p>
            <br />
            <div>
              <a href="">瞭解更多</a>
              <a href="">加入購物車</a>
            </div>
          </div>
        )}

        {/* item 6 */}
        {currentItemIndex > 1 && (
          <div className="item">
            <img src={require("../photo/Kuba.png")} alt="" />
            <br />
            <p>庫巴公仔</p>
            <br />
            <p className="price">3500金幣</p>
            <br />
            <div>
              <a href="">瞭解更多</a>
              <a href="">加入購物車</a>
            </div>
          </div>
        )}
        {/* item 7 */}
        {currentItemIndex > 2 && (
          <div className="item">
            <img src={require("../photo/turtle-monster.png")} alt="" />
            <br />
            <p>烏龜公仔</p>
            <br />
            <p className="price">2000金幣</p>
            <br />
            <div>
              <a href="">瞭解更多</a>
              <a href="">加入購物車</a>
            </div>
          </div>
        )}

        {/* item 8 */}
        {currentItemIndex > 3 && (
          <div className="item">
            <img src={require("../photo/blue-mushroom.png")} alt="" />
            <br />
            <p>藍色縮小蘑菇</p>
            <br />
            <p className="price">1000金幣</p>
            <br />
            <div>
              <a href="">瞭解更多</a>
              <a href="">加入購物車</a>
            </div>
          </div>
        )}
        {/* test */}
        <div>
          {itemData.map((item) => (
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <button className="btn btn-primary">{item.price}</button>
                <img src={`data:image/png;base64,${item.avatar.data}`} alt={item.title} />

                <br />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
