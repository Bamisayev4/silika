import React from 'react'
import go from "../img/feature/gradient/go.svg";


const Button = ({backgroundcolor,text,width,height,clickaction,radius,icon,color}) => {
  return (
      <div >
      <button className='hero__b' style={{display:'flex',padding:'10px',alignItems:'center',color:`${color}`,justifyContent:'center', gap:'2%', borderRadius: `${radius}`, outline: 'none',backgroundColor: `${backgroundcolor}` }} onClick={clickaction}>{ icon}{text}</button>
    </div>
  )
}

export default Button