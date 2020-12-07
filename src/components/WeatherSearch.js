import React,{useContext} from "react";
import Context from "../Context"

const WeatherSearch = () => {
    const {api_call}=useContext(Context)
    return (
        <div className="weathersearch">
            <form onSubmit={api_call}>
                <input name="location" autoComplete="off" type="text" />
                <div>
                    <button >Forecast</button>
                </div>
            </form>
        </div>
    )
}
export default WeatherSearch

