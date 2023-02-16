import LocationSearch from "../../components/Search";
import WeatherCard from "../../components/WeatherCard";
import styles from "./home.module.scss";
import useHomeState from "./state";

interface Weather {
  description: string;
  icon: string;
  id: string;
  main: string;
}

const Home = () => {
  const { isLoading, error, data, getLocationByQuery } = useHomeState();

  return (
    <div className={styles.homeWrapper}>
      <div className={styles.locationSearchWrapper}>
        <LocationSearch onLocationSubmit={getLocationByQuery} />
      </div>
      <div className={styles.homeContentWrapper}>
        {isLoading && <p className={styles.errorMessage}>Loading...</p>}

        {error && <p className={styles.errorMessage}>{error}</p>}

        {data && (
          <>
            <h2 className={styles.weatherCity}>{data.name}</h2>
            <div className={styles.weatherCardList}>
              {data?.weather?.map((weather: Weather) => (
                <WeatherCard
                  title={"Weather Condition"}
                  status={`${weather.main} - ${weather.description}`}
                  key={weather.id}
                />
              ))}
              <WeatherCard title={"Temperatue"} status={data?.main?.temp} />
              <WeatherCard
                title={"Feels Like Temperature"}
                status={data?.main?.temp}
              />
              <WeatherCard
                title={"Temperatue"}
                status={data?.main?.feels_like}
              />
              <WeatherCard title={"Humidity"} status={data?.main?.humidity} />
              <WeatherCard title={"Sea Level"} status={data?.main?.sea_level} />
              <WeatherCard title={"Wind Speed"} status={data?.wind?.speed} />
              <WeatherCard title={"Visibility"} status={data?.visibility} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
