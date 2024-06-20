import React, { useState } from 'react'

export default function Ford() {

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });

      const updateFord= () =>{
        setCar ((car)=>{
            return {...car, color:"black", year:"1975" }
        })
      }
    
      return (
        <>
          <h1>My {car.brand}</h1>
          <p>
            It is a {car.color} {car.model} from {car.year}. 
          </p>
          <button onClick={()=>updateFord()}>New Ford Button</button>
        </>
      )
}
  