export const getWeatherByQuery = (query: string) => {
    try {
        return fetch(`${process.env.REACT_APP_API_URL}?q=${query}&appid=${process.env.REACT_APP_API_KEY}`).then( res => res.json())
    } catch (error) {
        console.error(error)
    }
}