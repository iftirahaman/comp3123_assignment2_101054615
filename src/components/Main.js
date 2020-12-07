import React, { useState } from "react";
import axios from "axios";
import Header from "./Header"
import Content from "./Content"
import WeatherSearch from "./WeatherSearch"
import WeatherData from "./WeatherData"
import Context from "../Context"
import Error from "./Error"
import DateTime from "./DateTime"
import Tagline from "./Tagline"
import Footer from "./Footer"

const Main = () => {
    const [weather, setWeather] = useState();
    const [error, setError] = useState();
    const API_KEY = "8fc0a74115fb4677aa38433b07c4d737";
    const api_call = async (event) => {
        event.preventDefault();
        const location = event.target.elements.location.value;
        if (!location) {
            setError('*Sorry, Please Enter The Name Of The City You Are Looking For!*');
            setWeather(null);
            return;
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        await axios.get(url).then(
                (response) => {
                   
                    setWeather(response.data);
                    setError(null);
                }
            ).catch((error) => {
                setWeather(null);
                console.clear()
                setError(" Sorry! Wrong City Name");
            })
    }
    return (
      
        <div className="main">
            <Header/>
            <Content >
                <Tagline />
                <Context.Provider value={{ api_call: api_call, weather: weather }}>
                    <WeatherSearch />
                    {error && <Error error={error} />}
                    {weather && <WeatherData />}
                </Context.Provider>
            </Content>
            <DateTime />
            <Footer />
        </div>
    )
}
export default Main