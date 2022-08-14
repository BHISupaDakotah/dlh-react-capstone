import { useState, useEffect } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState([]);

  function renderWeather() {
    return weatherData.map((day) => {
      return (
        <div key={day.number} className="day-container">
          <div>{day.name}</div>
          <div>
            {" "}
            Temp: {day.temperature}
            {day.temperatureUnit}
          </div>
          <div>Forecast: {day.shortForecast}</div>
          <hr />
        </div>
      );
    });
  }

  useEffect(() => {
    const weatherUrl = "https://api.weather.gov/gridpoints/GJT/67,167/forecast";

    const fetchWeather = async () => {
      if (weatherData) {
        const res = await fetch(weatherUrl);
        const json = await res.json();
        setWeatherData(json.properties.periods);
      } else {
        console.error("weather error");
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-container">
      <div className="weather-greeting">Weekly Forecast Vernal, Utah</div>
      <div className="weather-float">{renderWeather()}</div>
    </div>
  );
}
