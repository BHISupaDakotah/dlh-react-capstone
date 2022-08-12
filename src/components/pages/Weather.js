import { useState, useEffect } from "react";

export default function Weather() {
  const [weatherData, setWeatherData] = useState([]);

  function renderWeather() {
    return weatherData.map((day) => {
      return (
        <div key={day.number}>
          <div>{day.name}:</div>
          <div>{day.shortForecast}</div>
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
      {console.log(weatherData)}
      {/* {weatherData[0].name}
      {weatherData[1].name}
      {weatherData[2].name}
      {weatherData[3].name} */}
      {/* {weatherData.detailedForecast} */}
      {renderWeather()}
    </div>
  );
}
