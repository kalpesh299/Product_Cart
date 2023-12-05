import React, { useEffect, useState } from 'react'

export const CartItem = ({price,name,qty,handleTotal}) => {
  
    const[total,settotal]=useState(0)
    useEffect(()=>{
        const itemTotal=qty*price;
        settotal(itemTotal)
       
        handleTotal(itemTotal);
      
    },[qty,price]);
   
    
   
  return (
    <div className='flex flex-end justify-between w-full mt-4  items-center bg-red-200 p-4'>
        <h1>{name}</h1>
        <h2>{qty}X{price}={total}</h2>
    </div>
  )
}
