// Created by Alex Martin

// This modal component is responsible for displaying the weather of an event. It also
// handles the logic for choosing a forecast object at noon on the day of the event.
// The modal also has a button that hides itself again.

import React, { useContext, useEffect, useState } from 'react'
import { EventContext } from '../EventProvider'
import { WeatherContext } from './WeatherProvider'
import './WeatherModal.css'

export const WeatherModal = () => {
    const { showWeather, setShowWeather, weatherEvent } = useContext(EventContext)
    const { weather } = useContext(WeatherContext)
    const [eventWeather, setEventWeather] = useState({})

    useEffect(() => {
        if (weather.length) {
            // find a relevant forecast for the date of the event
            let weatherObj
            // Dan says: top if statement checks for current user weather request - 
            if (weatherEvent.currentWeather) {
                weatherObj = weather[0]
            } else {
                weatherObj = weather.find(w => {
                    return w.dt_txt === `${weatherEvent.date} 21:00:00`
                })
            }
            if (weatherObj) {
                console.log("This use effect was triggered")
                setEventWeather({
                    date: weatherObj.dt_txt,
                    forecast: weatherObj?.weather[0].description,
                    high: weatherObj?.main.temp_max,
                    low: weatherObj?.main.temp_min
                })
            }
        }
    }, [weather])

    const handleClickCloseButton = () => {
        setShowWeather(false)
    }

    if (showWeather) {
        return (
            <section className="weather">
                <h4>{weatherEvent.name}</h4>
                <p>{weatherEvent.date} - {weatherEvent.city}, {weatherEvent.state}</p>
                <strong>FORECAST:</strong>
                <p className="weather__forecast">{eventWeather.forecast}</p>
                <p className="weather__high">Temp: {eventWeather.high} ⁰F</p>
                <button className="button closeWeatherButton" onClick={handleClickCloseButton}>Close</button>
            </section>
        )
    } else {
        return ""
    }
}