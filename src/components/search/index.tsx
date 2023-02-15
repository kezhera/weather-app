import styles from "./search.module.scss"

const LocationSearch = () => { 
    return <div className={styles.searchWrapper}>
        <input type="text" className={styles.searchInput}  placeholder="Enter the Location..."/>
        <button className={styles.searchSubmit} type="submit">Search</button>
    </div>
}

export default LocationSearch