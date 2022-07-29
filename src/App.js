import { Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/navBar-component";
import HomeComponent from "./components/home-component";
import CategoriesComponent from "./components/categories-component";
// 引入圖片 自動變換
import Mario from "./photo/Mario.png";
import Koopa from "./photo/koopa.png";
import Luigi from "./photo/Luigi.png";
import Peach from "./photo/Peach.png";

// 引入商品預覽圖片 自動更換
import RedMushroom from "./photo/red-mushroom.png";
import Block from "./photo/block.png";
import WarpPipe from "./photo/warp-pipe.png";
import Coin from "./photo/coin.png";
import PenguinClothe from "./photo/penguin-clothe.png";
import Kuba from "./photo/Kuba.png";
import TurtleMonster from "./photo/turtle-monster.png";
import BlueMushroom from "./photo/blue-mushroom.png";

function App() {
  const Images = [Mario, Koopa, Luigi, Peach];
  const itemsPreview = [
    RedMushroom,
    Block,
    WarpPipe,
    Coin,
    PenguinClothe,
    Kuba,
    TurtleMonster,
    BlueMushroom
  ];

  return (
    <div className="App">
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomeComponent Images={Images} itemsPreview={itemsPreview} />} />
        <Route path="/categories" element={<CategoriesComponent Images={Images} />} />
      </Routes>
    </div>
  );
}

export default App;
