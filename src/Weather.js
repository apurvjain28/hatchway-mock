import "./Weather.css";

const Weather = ({ day, imageUrl, tempMax, tempMin }) => {
  return (
    <div className="card">
      <div className="day">{day}</div>
      <div className="icon">
        <img src={imageUrl} alt="weather"></img>
      </div>
      <div className="temp">
        <p className="temp-min">{tempMax}</p>
        <p className="temp-max">{tempMin}</p>
      </div>
    </div>
  );
};

export default Weather;
