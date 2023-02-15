import { useRef } from "react"
import {InputHTMLAttributes} from "react";
import styles from "./search.module.scss"

interface LocationSearchProps extends InputHTMLAttributes<HTMLInputElement>  {
    onLocationSubmit: (query: string) => void
}


const LocationSearch = ({onLocationSubmit ,...rest}: LocationSearchProps) => { 
    const inputRef = useRef<HTMLInputElement>(null)
    
    const onSearchButtonSubmit = () => {
        onLocationSubmit(inputRef.current?.value ?? '')
    }

    return <div className={styles.searchWrapper}>
        <input 
            type="text" 
            className={styles.searchInput}  
            placeholder="Enter the Location..."
            ref={inputRef} 
            {...rest}
        />
        <button className={styles.searchSubmit} type="submit" onClick={onSearchButtonSubmit}>Search</button>
    </div>
}

export default LocationSearch