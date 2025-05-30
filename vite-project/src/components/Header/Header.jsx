import headerLogo from "../../assets/WTWR-logo.svg"
import userImg from "../../assets/user-image.svg"
import getWeatherData from "../../utils/weatherApi";
import { useEffect } from "react";
import { useState } from "react";
import "./Header.css"


const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
function AddClothes() {
    const handleClick = (event) => {
        console.log('Button clicked!', event);
    };

    return (
        <button onClick={handleClick} className="header__button">
            + Add Clothes
        </button>
    );
}

export default function Header(props) {
    useEffect(() => {
        getWeatherData("Seattle")
            .then(data => {
                props.setWeather(data);
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    }, []);

    return (
        <div className="header">
            <div className="header__section">
            <img src={headerLogo} alt="App logo" className="header__logo" />
            <p className="header__info">
                {currentDate}, {props.weather ? props.weather.city : "Loading..."}
            </p>
            </div>
           <div className="header__section"> 
            <div className="header__section-user-action"><AddClothes />
            <h2 className="header__user-name">Terrence Tegegne</h2>
            </div>
             <img src={userImg} alt="user Image" className="header__user-image"/>
            </div>
                        
  <div>
                 {props.weather ? (
                <div>
                    <p>Weather: {props.weather.temperature}°F, {props.weather.description}</p>
                </div>
            ) : (
                <p>Loading weather...</p>
            )}
        </div>


        </div>
        
    );
}


