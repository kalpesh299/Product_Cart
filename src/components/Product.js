import React,{useEffect, useState} from 'react'

export const Product = ({product,setProductlist,productlist,setEmpty}) => {

    const[count,setCount]=useState(0);
    const handleClick =(id)=>{
setCount(count+1)
       const getProduct=productlist.find((el)=>{
        return el.id==id;
       })
    
    getProduct.qty=count;
    const updatedList=productlist.map((el)=>{
        if(el.id==id){
           return {...el,qty:count}
        }
        return el;
    })
    setProductlist(updatedList)
}

useEffect(()=>{
    if(count>0){
        setEmpty(false)
        }else{
            setEmpty(true)
        }
},[count])
    
  return (
    <div className='flex flex-end justify-between w-full mt-2 items-center bg-gray-200 p-2'>
        <h1 className='text-center'>{product.name}</h1>
        <h2>{product.price}</h2>
        <div className='p-2'><button  className=' bg-red-200 px-3'>-</button> {product.qty} <button onClick={()=>handleClick(product.id)} className=' bg-green-200 px-3'>+</button></div>
    </div>
  )
}
