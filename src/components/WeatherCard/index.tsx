import styles from "./weather-card.module.scss"

interface WeatherCardProps {
    title: string;
    status: string;
}

const WeatherCard = ({title, status}: WeatherCardProps) => { 
    return <div className={styles.cardWrapper}>
        <h2 className={styles.cardTitle}>{title}</h2>
        <h3 className={styles.cardStatus}>{status}</h3>
    </div>
}

export default WeatherCard