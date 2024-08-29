import React from 'react'
import go from "../img/feature/gradient/go.svg";


const Button = ({backgroundcolor,text,width,height,clickaction,radius,icon}) => {
  return (
      <div >
      <button className='hero__b' style={{display:'flex',padding:'10px',alignItems:'center',justifyContent:'center', gap:'2%',width: `${width}`, borderRadius: `${radius}`, outline: 'none', height: `${height}`, backgroundColor: `${backgroundcolor}` }} onClick={clickaction}>{ icon}{text}</button>
    </div>
  )
}

export default Button