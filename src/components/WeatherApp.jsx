import { useEffect, useState } from "react";
import styled from "styled-components";
import WeatherForm from "./WeatherForm";
import WeatherMainInfo from "./WeatherMainInfo";

const WeatherAppStyled = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: aquamarine;
  & .box {
    width: 500px;
    height: 600px;
  }
`;

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const URL = "http://api.weatherapi.com/v1/current.json?aqi=no";
  const KEY = "7d55770498e6485fae7141436230805";
  useEffect(() => {
    loadInfo();
  }, []);
  useEffect(() => {
    document.title = `Weather | ${weather?.location.name ?? ""}`;
  }, [weather]);
  const loadInfo = async (city = "london") => {
    try {
      const request = await fetch(`${URL}&key=${KEY}&q=${city}`);
      const data = await request.json();
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(weather);

  const handleChangeCity = (city) => {
    setWeather(null);
    loadInfo(city);
  };
  return (
    <WeatherAppStyled>
      <div className="box">
        <WeatherForm onChangeCity={handleChangeCity} />

        <WeatherMainInfo weather={weather} />
      </div>
    </WeatherAppStyled>
  );
};

export default WeatherApp;
