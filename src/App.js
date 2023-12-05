
import './App.css';
import { CartItem } from './components/CartItem';
import { Product } from './components/Product';
import {  useEffect, useState } from 'react';

function App() {
const[empty,setEmpty]=useState(true);
const[pricetotal,setPricetotal]=useState(0);

  const[productlist,setProductlist]=useState([

    {id:1,
      name:"Product 1",
    price:100,
    qty:0
  },
  {id:2,
    name:"Product 2",
    price:10,
    qty:0
  },
  {id:3,
    name:"Product 3",
    price:200,
    qty:0
  },{id:4,
    name:"Product 4",
  price:1000,
  qty:0
}
  ]);
 
const handleTotal=(itemTotal)=>{
setPricetotal((prev)=>prev+itemTotal)
console.log(pricetotal)
}
      


  return (
    <div className="flex justify-center w-1/2 m-auto ">
      <div className='w-2/4 border-2 border-black p-2'>
        <h1 className='font-bold text-xl text-center'>Products</h1>
      {productlist.map((el)=>{
 return <Product product={el} setEmpty={setEmpty}  setProductlist={setProductlist} productlist={productlist}/>
      })}
      </div>

<div className="w-2/4 border-2 border-black">
  <h1 className='font-bold text-xl text-center'>Cart</h1> 
{empty ?(<h1 className='text-center font-bold text-red-600'>Cart is empty</h1> ): (
    productlist.map((el)=>{
     return (
      el.qty> 0 && <CartItem pricetotal={pricetotal} key={el.id} handleTotal={handleTotal} price={el.price} name={el.name} qty={el.qty}/>
     ) 
    })
    )}

<h1 className='flex  justify-end items-end '>Cart Total is {pricetotal}</h1> 
</div>
   
    </div>
  );
}

export default App;
