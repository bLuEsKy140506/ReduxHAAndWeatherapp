import { useState } from "react";
import "./City.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherCities } from "../features/reduxSlices/weatherSlice.js";

export default function City() {
  const [value, setValue] = useState(""); //value of the input text
  const [uniqueID, setUniqueID] = useState(""); //unique value I found to be pass on the async on the Weather API (q=lat,lng)
  const dispatch = useDispatch(); //activator of redux reducers
  const [searchOn, setSearchOn] = useState(false); //regulator to prevent the app to throw error

  const cities = useSelector((state) => state.city.cities); //fetch the cities data store in the redux store

  const onChange = (event) => {
    setValue(event.target.value); //set value everytime text input change
  };

  let buttonStatus; //part of the button regulator

  if (value === "" || searchOn === false) {
    buttonStatus = "post inactive";
  } else {
    buttonStatus = "post";
  }

  return (
    <>
      <div>
        <div className="search-container">
          <div className="search-inner">
            <input
              type="text"
              className="search-input"
              value={value}
              onChange={onChange}
            />
            <button
              className={buttonStatus}
              onClick={(e) => {
                setSearchOn(false);
                dispatch(fetchWeatherCities(uniqueID)); //fetch the unique API ID
                setValue("");
              }}
            >
              Fetch Weather
            </button>
          </div>
          {/*GENERATE DROPDOWN LIST BASED ON THE VALUE ON THE INPUT TEXT --- 
         🫡 credit to https://www.youtube.com/watch?v=Jd7s7egjt30&t=480s  */}
          <div className="dropdown">
            {cities
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const fullName = item.city_ascii.toLowerCase();

                return searchTerm && fullName.startsWith(searchTerm);
              })
              .map((item, index) => (
                <div
                  key={`${item}--${index}`}
                  className="dropdown-row"
                  onClick={() => {
                    setUniqueID(`${item.lat},${item.lng}`); //set unique id
                    setSearchOn(true); //set the regulator
                    setValue(
                      `${item.city_ascii}, ${item.admin_name}, ${item.country}`
                    ); //set the value in the input box
                  }}
                >
                  {item.city_ascii}, {item.admin_name}, {item.country}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
