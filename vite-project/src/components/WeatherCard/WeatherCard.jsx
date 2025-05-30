import "./WeatherCard.css";
import getWeatherData from "../../utils/weatherApi";

export default function WeatherCard({ weather }) {
  if (!weather) {
    return (
      <section className="weather-card">
        <p>Loading weather...</p>
      </section>
    );
  }

  return (
    <section className="weather-card">
      <div className="weather-card__temp">
        {weather.temperature}°F
      </div>
      <div className="weather-card__desc">
        {weather.description}
      </div>
      {/* Add more weather details or icons as needed */}
    </section>
  );
}