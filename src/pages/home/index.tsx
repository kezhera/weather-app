import LocationSearch from '../../components/Search';
import WeatherCard from '../../components/WeatherCard';
import styles from './home.module.scss'; 

const Home = () => { 
    return <div className={styles.homeWrapper}>
        <LocationSearch />
        <div className={styles.weatherCardList}>
            {Array(7).fill('').map( (_,i) => 
            (<WeatherCard 
                title="WeatherCard" 
                status="Rain - Moderate Rain" 
                key={i}/>
            ))}
        </div>
    </div>
}

export default Home