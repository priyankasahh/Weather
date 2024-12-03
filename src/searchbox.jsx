
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./searchbox.css";

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState("false");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "91cada5b2181a43c0a55666731e621d2";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result  = {
                city: city,
                temp : jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                humidity : jsonResponse.main.humidity,
                feelsLike : jsonResponse.main.feelsLike,
                weather : jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (error) {
            throw error;
            // console.error("Error fetching weather data:", error.message);
        }
    };

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {

        try{
            event.preventDefault();
            if (city.trim() === "") {
                console.error("City name cannot be empty!");
                return;
            }
            getWeatherInfo();
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch(error) {
            setError(true);
        }
       
    };

    return (
        <div className="searchbox">
            {/* <h3>Search for weather</h3> */}
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {/* {error && <p style={{color:"red"}}>No such place exists</p>} */}
            </form>
        </div>
    );
}
