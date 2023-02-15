import {useState, useEffect} from "react"
import LocationSearch from '../../components/Search';
import WeatherCard from '../../components/WeatherCard';
import { getWeatherByCoordinant } from "../../services/getWeatherByCoordinants";
import styles from './home.module.scss'; 


interface Weather {
    description: string,
    icon: string,
    id: string,
    main: string,
}
const API_KEY = 'a4f70ac140c21bc1071b01cc60b39ce5'

const Home = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null) as any

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (pos) => {
                const  {latitude, longitude} = pos.coords
                const response = await getWeatherByCoordinant(latitude, longitude)
                setData(response)
                setIsLoading(false)
            });
        }
    }, [])

    const onLocationSearchSubmit = async (query: string) => {
        setIsLoading(true)
        setData(null)
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`).then( res => res.json()) 
        setData(response)
        setIsLoading(false)
    }

    return <div className={styles.homeWrapper}>
        <div className={styles.locationSearchWrapper}>
            <LocationSearch onLocationSubmit={onLocationSearchSubmit} />
        </div>
        <div className={styles.homeContentWrapper}>
            {isLoading && <p className={styles.errorMessage}>Loading...</p>}

            {data && <>
                <h2 className={styles.weatherCity}>{data.name}</h2>
                <div className={styles.weatherCardList}>
                    {data?.weather?.map( (weather: Weather) => 
                        <WeatherCard 
                            title={'Weather Condition'} 
                            status={`${weather.main} - ${weather.description}`} 
                            key={weather.id}
                        /> 
                    )}
                    <WeatherCard title={'Temperatue'} status={data?.main?.temp} />
                    <WeatherCard title={'Feels Like Temperature'} status={data?.main?.temp} />
                    <WeatherCard title={'Temperatue'} status={data?.main?.feels_like} />
                    <WeatherCard title={'Humidity'} status={data?.main?.humidity} />
                    <WeatherCard title={'Sea Level'} status={data?.main?.sea_level} />
                    <WeatherCard title={'Wind Speed'} status={data?.wind?.speed} />
                    <WeatherCard title={'Visibility'} status={data?.visibility} />
                </div>
            </> 
            }
        </div>
    </div>
}

export default Home