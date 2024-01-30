
import React, { useEffect, useState } from 'react'
import './index.css'
import { getWeatherData } from '../../config/Api'
import {Button}  from '@mui/material'
import { TextField } from '@mui/material';
import {useNavigate}from'react-router-dom';


export default function MainInput() {
    const[input,setInput]=useState('')
    const[data,setData]=useState([])
    const[weather,setWeather]=useState([])
    const navigate=useNavigate()

    // localStorage.setItem('WeatherData',JSON.stringify(weather))
    useEffect(() => {
        if (input) {
            weatherData();
            
        }
}, [input]);

async function weatherData() {
    try {
        const existingData = JSON.parse(localStorage.getItem('WeatherData')) || [];
    const res = await getWeatherData(input);
    console.log(res)
    setData(res)
    setWeather(res)
localStorage.setItem('WeatherData', JSON.stringify(weather));
    } catch (error) {
    console.error('Error weather data:', error);
    }
}

function handleInput(e){
    const value=e.target.value
    setInput(value)
}
function handleSearch(){
    weatherData()
}

if (!data || !data.current) {
    return <div><img src='https://css-tricks.com/wp-content/uploads/2011/02/spinnnnnn.gif'/></div>;
}

return (
    <div className='main-box'>
        <div>
            <h1 style={{color:'white', fontSize:'4rem',fontFamily:'inherit'}}>Weather App</h1>
            </div>
        <div className='main container'>
        <TextField  id="outlined-basic" label="Enter Your City" variant="outlined" onChange={handleInput} fullWidth />
    <br/><br/>
    <Button variant="contained" onClick={handleSearch}>Search</Button>
    <Button variant="contained" onClick={()=>navigate('/search-history')}>History</Button>
        </div>
        <div className='contant1 container'>
        <div style={{fontSize:'5rem',fontWeight:'600'}}>{data.current.temp_c} °C</div>
        <div ><h1 style={{fontSize:'3rem'}}>{data.location.name}</h1>
        <p>{data.location.localtime}</p>
        <div><img src={data.current.condition.icon} width={'100%'}/></div>
        </div>
        </div>
        <div className='container contant2'>
            <img src='https://cdn-icons-png.flaticon.com/128/9176/9176568.png' width={50}/>
            <div><h5>Weather Details...</h5></div>
            <br/>
            <div style={{display:'flex',justifyContent:'space-evenly', alignItems:'center'}}>
            <div>{data.current.condition.text}
            <p>{data.current.wind_kph}</p>
            </div>
            <div>Cloudy
            <p>{data.current.cloud}%</p>
            </div>
            <div>Humidity
            <p>{data.current.humidity}%</p>
            </div>
            <div>Forcast
            <p><img src={data.current.condition.icon} width={'100%'}/></p>
            </div>
            </div>
        </div>
    </div>
)
}


