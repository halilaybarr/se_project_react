import defaultClothingItems from "../../utils/constants.js"
import WeatherCard from "../WeatherCard/Weathercard.jsx";

export default function Main({ weather, clothingItems }) {
  const filteredItems = clothingItems.filter(item =>
    item.weather === weather?.category // use 'category' as set in your weatherApi.js
  );

  return (
    <main className="main">
      <WeatherCard weather={weather} />
      <section>
        <h2>Today is {weather?.temperature}°F / You may want to wear:</h2>
        <ul className="clothing-list">
          {filteredItems.map(item => (
            <li key={item._id} className="clothing-list__item">
              <img src={item.link} alt={item.name} style={{ width: "120px" }} />
              <div>{item.name}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}