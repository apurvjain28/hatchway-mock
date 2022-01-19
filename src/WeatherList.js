import "./WeatherList.css";
import Weather from "./Weather";

const WeatherList = (props) => {
  return (
    <ul className="weatherList">
      {props.weatherData.map((weather) => (
        <Weather
          key={weather.id}
          day={weather.day}
          imageUrl={weather.imageUrl}
          tempMax={weather.tempMax}
          tempMin={weather.tempMin}
        />
      ))}
    </ul>
  );
};

export default WeatherList;
