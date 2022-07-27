import { Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/navBar-component";
import HomeComponent from "./components/home-component";

function App() {
  return (
    <div className="App">
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </div>
  );
}

export default App;
