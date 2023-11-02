import "./City.css";
import { useSelector } from "react-redux";
import WeatherDisplay from "./WeatherDisplay";
import City from "./City";
import LoadingSpinner from "./LoadingSpinner";

export default function WeatherForm() {
  const { data, isLoading } = useSelector((state) => state.weather);
  console.log(data);
  return (
    <>
      <div>
        <h2>Weather App</h2>
        <h3>Type any city in the world</h3>
        <City />
        {isLoading && <LoadingSpinner />}
        {data !== null && <WeatherDisplay data={data} />}
      </div>
    </>
  );
}
