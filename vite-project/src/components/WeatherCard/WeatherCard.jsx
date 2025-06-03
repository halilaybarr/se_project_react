import "./WeatherCard.css";
import sunny from "../../assets/sunny.svg";

export default function WeatherCard({ weather }) {
  if (!weather) {
    return (
      <section className="weather__card">
        <p>Loading weather...</p>
      </section>
    );
  }

  return (
    <section className="weather-card">
      <div className="weather__card-content">
        <p className="weather-card__temp">{weather.temperature}°F</p>
        <img src={sunny} alt="sunny" className="weather-card__img" />
      </div>
    </section>
  );
}
