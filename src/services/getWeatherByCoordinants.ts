export const getWeatherByCoordinant = (latitude: number, longitude: number) => {
    try {
        return fetch(`${process.env.REACT_APP_API_URL}?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`).then( res => res.json())
    } catch (error) {
        console.error(error)
    }
}