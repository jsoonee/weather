import React, { useState, useEffect } from "react";
import "./App.css";
import Icon from "./Icon";

const App = () => {
  const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState("Daegu");
  useEffect(() => {
    ifClicked();
  }, []);
  const ifClicked = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=90eae8f9c6fd233fd7bf46493412100e
    `)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
      if (res.status === 404) {
        return alert("Not found");
      }
      alert("Not found");
      throw new Error("Error");
      }
    })
    .then((object) => {
      setWeather(object);
      console.log(weather);
    })
    .catch((error) => console.log(error));
  }
  return (
    <div className="app">
        <div className="wrapper">
          <div className="search">
            <input 
              type="text"
              value={locations}
              onChange={(e) => setLocations(e.target.value)}
              placeholder="위치를 입력하세요"
              className="location_input"
            />
            <button className="searcher" onClick={ifClicked}>
              검색
            </button>
          </div>
          <div className="appdata">
            <div className="city">{weather?.name}</div>
            <div className="desc">{weather &&
                          weather.weather &&
                          weather.weather[0] &&
                          weather.weather[0].description}
            </div>
            <Icon weather={weather &&
                          weather.weather &&
                          weather.weather[0] &&
                          weather.weather[0].icon}
                  className="wIcon"
            />
            <div className="info">
            <span className="temp">{Math.floor(weather?.main?.temp-273.15)}℃</span>/
            <span className="humid">{weather?.main?.humidity}%</span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
