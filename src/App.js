import React, { useState, useEffect } from "react";
import "./App.css";
import { WiSleet } from "react-icons/wi";

function App() {
  const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState("daegu");
  useEffect(() => {
    ifClicked();
  }, []);
  const ifClicked = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=90eae8f9c6fd233fd7bf46493412100e
    `)
    .then((res) => {
      if (res.ok) {
        console.log(res.status);
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
            <p className="city">{weather?.name}</p>
            <p className="icon"><WiSleet className="wIcon"/></p>
            <p className="temp">{Math.floor(weather?.main?.temp-273.15)}℃</p>
            <p className="humid">{weather?.main?.humidity}%</p>
          </div>
        </div>
      </div>
  );
}

export default App;
