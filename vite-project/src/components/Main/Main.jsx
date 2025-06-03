import { defaultClothingItems } from "../../utils/constants.js";
import WeatherCard from "../WeatherCard/Weathercard.jsx";
import "./Main.css";

export default function Main({ weather, clothingItems }) {
  const filteredItems = clothingItems.filter(
    (item) => item.weather === weather?.category
  );

  return (
    <main>
      <WeatherCard />
      <section className="cards">
        <p className="cards__text">Today is 75 &deg; F </p>
      </section>
    </main>
  );
}
