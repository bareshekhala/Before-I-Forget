import React, { useEffect, useState } from 'react'
import cloud from "../assets/cloud.png"

function Cloud() {
    const [clouds,setClouds]= useState([])
    useEffect(()=>{
     const intervalId = setInterval(()=>{
        let newCloud= {
            x: -200,
            y: Math.random()*130,
        speed:1}
        setClouds((preCloud)=>{
            return [...preCloud, newCloud]
        })
     },6000)
       return () => clearInterval(intervalId);

    },[])
    useEffect(() => {
    const movementId = setInterval(() => {
      setClouds((previousClouds) => {
        return previousClouds.map((cloud) => {
          return {
            ...cloud,
            x: cloud.x + cloud.speed,
          };
        });
      });
    }, 13);

    return () => clearInterval(movementId);
  }, []);
  return (
    <div className="overflow-hidden pointer-events-none z-0 cloud">
      {clouds.map((cloudI, index)=>{
        return (
<img key={index} src={cloud}    className='cloud'   style={{
    left: `${cloudI.x}px`,
    top: `${cloudI.y}%`}}   />
        )

      })}
    </div>
  )
}

export default Cloud
