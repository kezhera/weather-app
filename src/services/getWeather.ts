import api from "../utils/api"

export const getWeatherByQuery = (query: string) => {
    return api.get(`${process.env.REACT_APP_API_URL}?q=${query}&appid=${process.env.REACT_APP_API_KEY}`)
}

export const getWeatherByCoordinant = (latitude: number, longitude: number) => {
    return api.get(`${process.env.REACT_APP_API_URL}?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_API_KEY}`)
}