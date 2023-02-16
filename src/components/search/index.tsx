import { useRef } from "react"
import {InputHTMLAttributes} from "react";
import styles from "./search.module.scss"

interface LocationSearchProps extends InputHTMLAttributes<HTMLInputElement>  {
    onLocationSubmit: (query: string) => void
}


const LocationSearch = ({onLocationSubmit ,...rest}: LocationSearchProps) => { 
    const inputRef = useRef<HTMLInputElement>(null)
    
    const onSearchButtonSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        onLocationSubmit(inputRef.current?.value ?? '')
    }

    return <form className={styles.searchWrapper} onSubmit={(e) => onSearchButtonSubmit(e)}>
        <input 
            type="text" 
            className={styles.searchInput}  
            placeholder="Enter the Location..."
            ref={inputRef} 
            {...rest}
        />
        <button className={styles.searchSubmit} type="submit">Search</button>
    </form>
}

export default LocationSearch