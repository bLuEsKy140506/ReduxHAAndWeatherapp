import "./WeatherDisplay.css";

export default function WeatherDisplay({ data }) {
  // console.log(data);
  return (
    <>
      <div>
        <div className="flex-row weather-display-container">
          <div className="left-side-weather-display">
            <div>
              <span className="header-description">
                {data.location.name}, {data.location.region},{" "}
                {data.location.country}
              </span>
              <span className="highlight">°C</span>
            </div>
            <div>
              <img src={data.current.condition.icon} alt="icon--img" />
              <span className="highlight-1 blue">{data.current.temp_c}°</span>
            </div>
            <div>{data.current.condition.text}</div>
          </div>
          <div className="right-side-weather-display">
            <div>
              <span className="header-description">
                Feels like {data.current.feelslike_c}°
              </span>
            </div>
            <div>
              <ul className="description">
                <li>
                  Humidity
                  <span className="blue"> {data.current.humidity}</span>
                </li>

                <li>
                  Wind{" "}
                  <span className="blue"> {data.current.wind_mph} mph</span>
                </li>
                <li>
                  Pressure{" "}
                  <span className="blue"> {data.current.pressure_mb} mb</span>
                </li>
                <li>
                  Vision <span className="blue"> {data.current.vis_km} km</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
