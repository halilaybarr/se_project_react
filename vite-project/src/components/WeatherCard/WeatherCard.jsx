import "./WeatherCard.css";

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
      <div className="weather-card__content">
        <span className="weather-card__temp">{weather.temperature}°F</span>
        <span className="weather-card__svg">
          <img
            src={weather.icon}
            alt={weather.description}
            className="weather-card__icon-img"
          />
        </span>
      </div>
    </section>
  );
}
