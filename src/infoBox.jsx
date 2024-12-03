
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny"; // Corrected import
import "./InfoBox.css";

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1684126555972-9628ab5b1038?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://plus.unsplash.com/premium_photo-1690016719998-a5852b62c9e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1711024165231-9be34714c01e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    const Rainy_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnl8ZW58MHx8MHx8fDA%3D";

    return (
        <div className="Infobox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={info.humidity > 80 ? Rainy_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                            alt="weather"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city}{" "}
                                {info.humidity > 80 ? (
                                    <ThunderstormIcon />
                                ) : info.temp > 15 ? (
                                    <WbSunnyIcon /> // Corrected usage
                                ) : (
                                    <AcUnitIcon />
                                )}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "text.secondary" }}>
                                <p>Temperature = {info.temp} &deg;C</p>
                                <p>Humidity = {info.humidity}</p>
                                <p>Min Temp = {info.tempMin}&deg;C</p>
                                <p>Max Temp = {info.temp_max}&deg;C</p>
                                <p>
                                    The Weather can be described as <i>{info.weather}</i> and feels like{" "}
                                    {info.feelsLike}&deg;C
                                </p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}
