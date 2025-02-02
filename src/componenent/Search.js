import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material'
const Search = ({updateInfo}) => {
    const[city,setCity]=useState('');
    const[error,setError]=useState(false);
    const API_URL='https://api.openweathermap.org/data/2.5/weather';
    const API_KEY='cc6d622a596ab208414d575b93ce2a69';
    
    const getWeatherInfo=async()=>{
      try{
       const response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
       const jsonResponse=await response.json();
       let result={
        city:city,
        temp:jsonResponse.main.temp,
        min:jsonResponse.main.temp_min,
        max:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description
       }
       console.log(result);
       return result;
      }catch(err){
        throw err;
      }
    }

    const handleChange=(e)=>{
        setCity(e.target.value)
    }

    const handleSubmit=async(e)=>{
      try{
        e.preventDefault();
        console.log(city);
        setCity('');
        const newInfo=await getWeatherInfo();
        updateInfo(newInfo);
      }
      catch(err){
       setError(true);
      }
        
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <TextField id="City" label="City Name" variant="outlined" 
      value={city} 
      onChange={handleChange}
      required/>
      <br></br><br></br>
      <Button variant='contained' type='submit'>Search</Button>
{error && <p style={{color:'red'}}>No such place exist!</p>}
      </form>
    </div>
  )
}

export default Search
