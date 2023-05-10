import { useState } from "react";
import styled from "styled-components";

const WeatherFormStyled = styled.div`
  width: 100%;
  height: 10%;

  form {
    width: 100%;
    height: 100%;
  }

  .input {
    width: 100%;
    border-radius: 2%;
  }
`;

const WeatherForm = ({ onChangeCity }) => {
  const [city, setCity] = useState("");

  const onChange = (e) => {
    const value = e.target.value;
    if (value !== "") {
      setCity(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onChangeCity(city);
  };
  return (
    <WeatherFormStyled>
      <form onSubmit={handleSubmit}>
        <input className="input" type="text" onChange={onChange} />
      </form>
    </WeatherFormStyled>
  );
};

export default WeatherForm;
