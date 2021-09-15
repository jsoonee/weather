import React, { useState, useEffect } from "react";
import "./App.css";
import Icon from "./Icon";
import Desc from "./Desc";

const App = () => {
  const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState("Daegu");
  useEffect(() => {
    ifClicked();
  }, []);
  const handleErrors = (res) => {
    if (!res.ok) {
      alert("Not found");
      throw new Error("Error");
    }
    if (res.status === 404) {
      alert("Not found");
    }
    return res.json();
  }
  const ifClicked = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locations}&appid=90eae8f9c6fd233fd7bf46493412100e
    `)
    .then(handleErrors)
    /*
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
    */
    .then((object) => {
      setWeather(object);
      console.log(weather);
    })
    .catch((error) => console.log(error));
    setLocations('');
  }
  const onEnter = (e) => {
    if (e.key == 'Enter'){
      ifClicked();
    }
  }
  return (
    <div className="app">
        <div className="wrapper">
          <div className="search">
            <input 
              type="text"
              value={locations}
              onChange={(e) => setLocations(e.target.value)}
              placeholder="도시를 입력하세요(영문)"
              className="location_input"
              onKeyPress = {onEnter}
            />
            <button className="searcher" onClick={ifClicked}>
              확인
            </button>
          </div>
          <div className="appdata">
            <div className="city">{weather?.name}</div>
            <Desc name={weather &&
                          weather.weather &&
                          weather.weather[0] &&
                          weather.weather[0].id}
            className="desc"/>
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
