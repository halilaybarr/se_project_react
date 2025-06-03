import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { defaultClothingItems } from "../../utils/constants";
import Footer from "./Footer/Footer";
import getWeatherData from "../../utils/weatherApi";

function App() {
  const [weather, setWeather] = useState();

  useEffect(() => {
    async function fetchWeather() {
      try {
        const data = await getWeatherData("Seattle");
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }

    fetchWeather();
  }, [setWeather]);

  return (
    <div className="App">
      <Header className="header" weather={weather} setWeather={setWeather} />
      <Main
        className="main"
        weather={weather}
        clothingItems={defaultClothingItems}
      />
      <Footer className="Footer" />
    </div>
  );
}

export default App;
