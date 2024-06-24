import React from 'react';
import { useState } from 'react';
import SearchBox from './SearchBox';
import './App.css';
import InfoBox from './InfoBox';

function App() {
const [weatherInfo , setWeatherInfo]=useState({
city:"Delhi",
feelslike:24.84,
temp:25.05,
tempMin:25.05,
tempMax:25.05,
humidity:47,
weather:"haze",
});
let updateInfo =(result)=>{
  setWeatherInfo(result);
}
  return (
    <>
      <SearchBox updateInfo={updateInfo}/>
       <InfoBox info={weatherInfo}/>
    </>
  )
}

export default App
