import { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import constants from "../../utils/constants";
import Footer from "./Footer/Footer";

function App() {
  const [weather, setWeather] = useState();

  return (
    <div className="App">
      <Header className="header" weather={weather} setWeather={setWeather} />
      <Main
        className="main"
        weather={weather}
        clothingItems={constants.defaultClothingItems}
      />
      <Footer className="Footer" />
    </div>
  );
}

export default App;
