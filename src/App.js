import "./App.css";
import WeatherList from "./WeatherList";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [temperature, setTemperature] = useState([]);

  const fetchWeatherData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely&appid=01ae7016e3c50ad93bfbfbca01258d30"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log(data);
      // console.log(data.daily);

      const weekday = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];

      const weather = [];

      for (let key of data.daily) {
        const day = new Date(key.dt);
        console.log(day);

        weather.push({
          id: key.dt,
          day: weekday[day.getDay()],
          imageUrl: `http://openweathermap.org/img/wn/${key.weather[0].icon}@2x.png`,
          tempMax: (key.temp.max - 273).toFixed(0),
          tempMin: (key.temp.min - 273).toFixed(0),
        });
      }

      setTemperature(weather);
    } catch (err) {
      throw err;
    }
  }, []);

  useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  return <WeatherList weatherData={temperature} />;
}

export default App;
