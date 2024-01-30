

import React from 'react'
import{useNavigate}from 'react-router-dom'

export default function SearchHistory() {
    
    const getData = JSON.parse(localStorage.getItem('WeatherData'));

    const navigate=useNavigate()

return (
    <div>
    <div style={{backgroundColor:'black',color:'white',textAlign:'left',padding:'10px'}}>
        <button onClick={()=>navigate('/')} style={{padding:'6px 14px',border:'none',borderRadius:'20px'}}>Home</button>
        </div>
        <div style={{backgroundColor:'rgb(238, 238, 238)',padding:'20px',textAlign:'left'}} >
        <h3>{getData.name}</h3>
        <img src={getData.current.condition.icon}/>
        <p>Feels Like {getData.current.feelslike_c}°C</p>
        </div>
    </div>
)
}

