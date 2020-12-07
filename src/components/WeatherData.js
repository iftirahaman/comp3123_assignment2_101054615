import React, { useContext } from "react";
import Context from "../Context"


const WeatherData = () => {
    const { weather } = useContext(Context)
   
    const wcon = {
        'clouds': {
            'all': `${weather.clouds.all}`,
        },
        'coord': {
            'lat': `${weather.coord.lat}`,
            'lon': `${weather.coord.lon}`
        },
       
        'dt': `${weather.dt}`,
        'main': {
            'feels_like': `${weather.main.feels_like}`,
            'humidity': `${weather.main.humidity}`,
            'pressure': `${weather.main.pressure}`,
            'temp': `${weather.main.temp}`,
            'temp_max': `${weather.main.temp_max}`,
            'temp_min': `${weather.main.temp_min}`,
        },
        'name': `${weather.name}`,
        'sys': {
            'country': `${weather.sys.country}`,
            'id': `${weather.sys.id}`,
            'sunrise': `${new Date(weather.sys.sunrise)}`,
            'sunset': `${new Date(weather.sys.sunset)}`,
            'type': `${weather.sys.type}`
        },
        'timezone': `${weather.timezone}`,

        'visibility': `${weather.visibility}`,
        'weather': {
            'ww': {
                'description': `${weather.weather[0].description}`,
                'icon': `${weather.weather[0].icon}`,
                'id': `${weather.weather[0].id}`,
                'main': `${weather.weather[0].main}`,
            }
        },
        'wind': {
            'deg': `${weather.wind.deg}`,
            'speed': `${weather.wind.speed}`
        }
    }

    function windstatus() {
        var winddir = wcon.wind.deg;
        var windstatus = '';
        if(winddir==='0'){
            windstatus='N'
        }else if(winddir==='90'){
            windstatus='E'
        }
        else if(winddir==='180'){
            windstatus='S'
        }
        else if(winddir==='270'){
            windstatus='W'
        }
        else if(winddir>'0' && winddir<'90'){
            windstatus='NE'
        }
        else if(winddir>'90'&& winddir<'180'){
            windstatus='SE'
        }
        else if(winddir>'180' && winddir<'270'){
            windstatus='SW'
        }
        else if(winddir>'270' && winddir<='360'){
            windstatus='NW'
        }
        return windstatus;
    }
    return (
      
        <div className="weatherdata">
            <div id="weatherdataheader">
                <div className="icon"><img src={`http://openweathermap.org/img/wn/${wcon.weather.ww.icon}@2x.png`} alt=""></img></div>
                <h1>{`${wcon.name}, ${wcon.sys.country}`}</h1>
                <h1>{`${wcon.weather.ww.description}`}</h1>
                <h1>{`latitude : ${wcon.coord.lat} longitude: ${wcon.coord.lon}`}</h1>
            </div>
            <div id="weatherdatacontentright">
                <h1>{`Cloud Cover: ${wcon.clouds.all} %`}</h1>
                <h1>{`Tempature: ${wcon.main.temp} ℃ `}</h1>
                <h1>{`Real Feel: ${wcon.main.feels_like} ℃ `}</h1>
                
                <h1>{`Humidity: ${wcon.main.humidity} %`}</h1>
                <h1>{`Maxium Temp: ${wcon.main.temp_max} ℃  Min Tempature: ${wcon.main.temp_min} ℃ `}</h1>
                <h1>{`Pressure: ${wcon.main.pressure / 10}  kPa`}</h1>
                <h1>{`Wind Speed: ${wcon.wind.speed} km/h `}</h1>
                <h1>{`Wind Degree: ${wcon.wind.deg} ${windstatus()} `}</h1>
            </div>
        </div>
    )
}
export default WeatherData