import React, { createContext, useState } from 'react'
import { keys } from '../../../Settings'

export const WeatherContext = createContext()

export const WeatherProvider = props => {
    const [weather, setWeather] = useState({})

    const getWeather = (city, stateCode) => {
        return fetch(`api.openweathermap.org/data/2.5/forecast?q=nashville,tn,us&appid=${keys.weather}`)
            .then(res => res.json())
            .then(response => console.log(response))
    }

    return (
        <WeatherContext.Provider value={{
            weather, getWeather
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}