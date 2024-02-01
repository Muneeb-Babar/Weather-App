

import React,{useEffect,useState} from 'react'
import{useNavigate}from 'react-router-dom'

export default function SearchHistory(props) {
    
    const { history } = props
    const [searchHistory,setsearchHistory] = useState([])

    useEffect(()=>{
    setsearchHistory(history)
    },[])
    console.log('history --> ', history);
    const navigate=useNavigate()

return (
    <div>
    <div style={{backgroundColor:'black',color:'white',textAlign:'left',padding:'10px'}}>
        <button onClick={()=>navigate('/')} style={{padding:'6px 14px',border:'none',borderRadius:'20px'}}>Home</button>
        </div>
        {/* <div style={{backgroundColor:'rgb(238, 238, 238)',padding:'20px',textAlign:'left'}} >
    
        <div style={{display:'flex',gap:'20px',flexWrap:'wrap'}}>
            {searchHistory.map((item) =>{
                return(
                    <div style={{display:'flex',}}>
                        <h3>{item.Name}</h3>
                        <h3>{item.Temp}</h3>
                    </div>
                )
            })}
        </div>
        </div> */}
    </div>
)
}

