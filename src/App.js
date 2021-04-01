import React, { useState } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

const App = () => {
  const [temperature, setTemperature] = useState('');
  const [desc, setDesc] = useState('');
  const [city, setCity] = useState('Melbourne');
  const [country, setCountry] = useState('AU');

  const getWeatherData = (city, country) => {
    axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=43a06401a6087d9fa912e88dae404edb`
    })
      .then((response) => {
        console.log(response.data.main.temp);
        setTemperature(response.data.main.temp - 273.15);
        setDesc(response.data.weather[0].main)
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "70px",
          width: "100%",
          backgroundColor: "#226ba3",
          fontSize: "30px",
          color: "#fff",
        }}
      >
        Weather App
      </div>
      <div
        style={{ height: '5px', width: '100%', backgroundColor: 'blue' }}>
      </div>
      <br />
      <div style={{ marginLeft: '33%'}}>
        <div
          style={{
            height: '150px',
            width: '450px',
            backgroundColor: '#94e5ff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontsize: '25px',
          }}
        >
          {new Date().toLocaleString()}
          <br />
          {city} weather
          <br />
          {Math.round(temperature * 100) / 100} °C - {desc}
        </div>
        <br />
        <input
          type='text'
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type='text'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        /> 
        <button
          onClick={() => {
            getWeatherData(city, country);
          }}
        >
          GET
        </button>
      </div>
    </>
  );
};

render(<App />, document.querySelector('#root'));

export default App;
