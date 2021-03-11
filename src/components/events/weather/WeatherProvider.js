// Created by Alex Martin

// This component reaches out to the weather API and provides a context for the weather state variable

import React, { createContext, useState } from 'react'
import { keys, Settings } from '../../../Settings'

export const WeatherContext = createContext()

export const WeatherProvider = props => {
    const [weather, setWeather] = useState({})

    const getWeather = (city, stateCode) => {

        return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${stateCode}us&units=imperial&appid=${Settings.WeatherAPI}`)
            .then(res => res.json())
            .then(pRes => setWeather(pRes.list))
    }

    return (
        <WeatherContext.Provider value={{
            weather, getWeather
        }}>
            {props.children}
        </WeatherContext.Provider>
    )
}