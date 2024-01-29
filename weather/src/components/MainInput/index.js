

import React, { useEffect, useState } from 'react'
import './index.css'
import { getWeatherData } from '../../config/Api'
import {Button}  from '@mui/material'
import { TextField } from '@mui/material';

export default function MainInput() {
    const[input,setInput]=useState('')
    const[data,setData]=useState({location:[]})

    useEffect(() => {
        if (input) {
        WeatherData();
        }
}, []);

async function WeatherData() {
    try {
    const res = await getWeatherData(input);
    console.log(res)
    setData(res);
    } catch (error) {
    console.error('Error weather data:', error);
    }
}

function handleInput(e){
    const value=e.target.value
    setInput(value)
}
function handleSearch(){
    WeatherData()
}
if(!data){
    return <>Loading</>
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
        </div>
        <div className='contant1 container'>
        <div style={{fontSize:'5rem',fontWeight:'600'}}>{data.current.temp_c} °C</div>
        <div ><h1 style={{fontSize:'3rem'}}>{data.location.name}</h1>
        <p>{data.location.localtime}</p>
        <div><img src={data.current.condition.icon} width={'100%'}/></div>
        </div>
        </div>
        <div className='container contant2'>
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


