import SearchBox from './searchBox';
import InfoBox from './infoBox';
import { useEffect, useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
            city:"Birgunj",
            feelsLike: undefined,
            humidity: 43,
            temp: 22.2,
            tempMin: 22.2,
            temp_max: 22.2,
            weather: "clear sky",
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Priyanka</h2>
            <SearchBox updateInfo = {updateInfo} />
            <InfoBox info = {weatherInfo} />
        </div>
    );
}
