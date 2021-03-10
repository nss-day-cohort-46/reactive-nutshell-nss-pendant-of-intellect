import React, { createContext, useState } from 'react'
import { keys } from '../../../Settings'

export const WeatherContext = createContext()

export const WeatherProvider = props => {
    const [weather, setWeather] = useState({})

    const getWeather = (city, stateCode) => {
        return fetch(`api.openweathermap.org/data/2.5/forecast?q=${city},${stateCode}&appid=${keys.weather}`)
            .then(res => res.json())
            .then(setWeather)
    }

    return (
        <WeatherContext.Provider value={{
            weather, getWeather
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}