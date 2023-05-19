import React from 'react'


const addToCart = {
    width: '40px',
    height: '30px',
    margin: '10px',
    backgroundColor: 'green',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    float:"right",
    cursor:"pointer"
    
}
const ulStyle = {
    listStyle: 'none',
    padding: '0px',
    margin: '10px',
    display:'inline-flex'
}
const liStyle = {
    margin: '8px',
    cursor:'pointer'
}
const floatR={
    float:"right",
    margin:"5px",
    fontSize:"25px",
    fontWeight:"bolder"
}


export default function Header(prop) {
    // console.log("HOME PROPS--", prop.cardData.length)
    
  return (
    
    <>
    
      <div  className='add_to_Cart' >
       <img style={addToCart} src="https://tse4.mm.bing.net/th?id=OIP.5KMD9lFDPj7ON6469MfmcwHaHa&pid=Api&P=0" alt="" />
       <span style={floatR} >
    {prop.cardData.length}
   </span>

   
   </div>

   <ul className='ulStyle' style={ulStyle} >
    <li style={liStyle} >Home</li>
    <li style={liStyle} >About</li>
    <li style={liStyle} >Contact</li>
   </ul>
   
    </>
  )
}
