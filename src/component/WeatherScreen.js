import React, { useState, useEffect } from "react";


const WeatherScreen = () => {
  const [fahrenheit, setFarenheit] = useState(0);

  const calculate= (value) =>  {
      console.log('recibe valor', value)
      let result= (value*9/5)+32
      setFarenheit(result)

  }
  useEffect(()=>{
      console.log('inicia componente y ejecutar')
      calculate(0)
  },[])

  return (
    <div>
      <h1>Weather Calculator</h1>
      <div className="Conteiner">
        <input type="number" 
        placeholder="0Cº Celsious"
        onChange={(e)=>calculate(e.target.value)}/>
        <input
          type="number"
          placeholder="0Fº Fahrenheit"
          value={fahrenheit}
          disabled
        />
      </div>
    </div>
  );
};

export default WeatherScreen;
