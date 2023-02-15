import LocationSearch from '../../components/search';
import styles from './home.module.scss'; 

const Home = () => { 
    return <div className={styles.homeWrapper}>
        <LocationSearch />
    </div>
}

export default Home