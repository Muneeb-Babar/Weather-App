import React, { useEffect, useState } from 'react';
import './index.css';
import { getWeatherData } from '../../config/Api';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function MainInput() {
    const [input, setInput] = useState('');
    const [data, setData] = useState(null);
    const [buttonClicked, setButtonClicked] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (buttonClicked) {
            weatherData();
        }
    }, [buttonClicked]);

    async function weatherData() {
        try {
            const res = await getWeatherData(input);
            setData(res);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            // Handle error state here
        } finally {
            setButtonClicked(false);
        }
    }

    function handleInput(e) {
        const value = e.target.value;
        setInput(value);
    }

    function handleSearch() {
        setButtonClicked(true);
    }

    function handleHistory() {
        navigate('/search-history');
    }

    return (
        <div className='main-box'>
            <div>
                <h1 style={{ color: 'white', fontSize: '4rem', fontFamily: 'inherit' }}>Weather App</h1>
            </div>
            <div className='main container'>
                <TextField id="outlined-basic" label="Enter Your City" variant="outlined" onChange={handleInput} fullWidth />
                <br /><br />
                <Button variant="contained" onClick={handleSearch} disabled={buttonClicked}>
                    Search
                </Button>
                <Button variant="contained" onClick={handleHistory}>
                    History
                </Button>
            </div>
            {data && (
                <div className='contant1 container'>
                    <div style={{ fontSize: '5rem', fontWeight: '600' }}>{data.current.temp_c} °C</div>
                    <div>
                        <h1 style={{ fontSize: '3rem' }}>{data.location.name}</h1>
                        <p>{data.location.localtime}</p>
                        <div>
                            <img src={data.current.condition.icon} alt="Weather Icon" width={'60%'} />
                        </div>
                    </div>
                </div>
            )}
            {data && (
                <div className='container contant2'>
                    <img src='https://cdn-icons-png.flaticon.com/128/9176/9176568.png' alt="Weather Details Icon" width={50} />
                    <div>
                        <h5>Weather Details...</h5>
                    </div>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <div>
                            {data.current.condition.text}
                            <p>{data.current.wind_kph}</p>
                        </div>
                        <div>
                            Cloudy
                            <p>{data.current.cloud}%</p>
                        </div>
                        <div>
                            Humidity
                            <p>{data.current.humidity}%</p>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            Forecast
                            <p>
                                <img src={data.current.condition.icon} alt="Forecast Icon" width={'60%'} />
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}