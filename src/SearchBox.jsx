import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";




export default function SearchBox({updateInfo}){
    let[city, setCity] = useState("");
    let[error,setError ]=useState(false);
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_Key= "a9b26255787f35d9f4c2c863752aa114";

    let getWeatherInfo = async()=>{
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}`);
        let jsonResponse = await response.json();
        console.log(jsonResponse); 

        let result = {
            city:city,
            temp: jsonResponse.main.temp,
            tempMin:jsonResponse.main.temp_min,
            tempMax:jsonResponse.main.temp_max,
            humidity:jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feelsLike,
            weather: jsonResponse.weather[0].description,
        };
        console.log(result);
        return result;
    }catch(err){
        throw err;
    } };
    let handleChange= (evt)=>{
        setCity(evt.target.value);
    }

    let handelSubmit =async (evt)=>{
        try{
        evt.preventDefault();
        console.log(city);
        setCity("");
       let newinfo = await getWeatherInfo();
       updateInfo(newinfo);
    }catch(err){
setError(true);
    }
};
    return (
        <div>
            <div className="heading.">
                <h1>Know your Climate..</h1>
                </div>
            <form onSubmit={handelSubmit}>
                
            <TextField id="outlined-basic" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <Button  type="submit" variant="contained">
        Search
      </Button>
{error && <p>No Such Place Exits</p>}
            </form>
        </div>
    )
}