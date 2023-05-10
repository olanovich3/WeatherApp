import styled from "styled-components";

const WeatherMainInfoStyled = styled.div`
  background-color: white;
  padding: 1rem;
  width: 100%;
  height: 90%;
  border-radius: 2%;
  & .information {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  & .informationplace {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 10%;
  }
  & .images {
    height: 30%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    padding: 1rem;
  }
  & .temp {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  & .iframeinformation {
    height: 60%;
    width: 100%;
  }

  & .iframe {
    width: 100%;
    height: 100%;
  }
  h2 {
    font-size: 30px;
  }
  h3 {
    font-size: 20px;
  }
`;

const WeatherMainInfo = ({ weather }) => {
  return (
    <WeatherMainInfoStyled>
      <div className="information">
        <div className="informationplace">
          <h2>{weather?.location?.name}</h2>
          <h3>{weather?.location?.country}</h3>
        </div>

        <div className="images">
          <img
            src={`http:${weather?.current?.condition?.icon}`}
            width={"128px"}
            alt={weather?.current?.condition?.text}
          />

          <div className="temp">
            <h3>{weather?.current?.condition?.text}</h3>
            <h2>{weather?.current?.temp_c}º</h2>
          </div>
        </div>
        <div className="iframeinformation">
          <iframe
            className="iframe"
            title="mapa"
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d158858.58519804943!2d${weather?.location?.lon}937!3d${weather?.location?.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1683714455892!5m2!1ses!2ses`}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </WeatherMainInfoStyled>
  );
};

export default WeatherMainInfo;
