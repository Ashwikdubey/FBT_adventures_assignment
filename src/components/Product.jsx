import React, { useContext, useState } from 'react'
import {BsEyeFill,BsPlus} from "react-icons/bs"
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

const Product = ({product}) => {
    //destructure product
    const{id,title,image,price,category}=product
    const[add,setAdd]=useState(false)
    const{addToCart}=useContext(CartContext)
  return (
    <div>
        <div className='border border-[#e4e4e4] h-[300px] mb-4 overflow-hidden relative group transition'>
            <div className='w-full h-full items-center justify-center flex'>
                {/* {image} */}
                <div className='w-[200px] flex items-center justify-center mx-auto'>
                    <img src={image} className='max-h-[160px] group-hover:scale-110 transition duration-300' alt="img" />
                </div>
            </div>
            {/* {buttons} */}
            <div className='absolute top-6 -right-11 group-hover:-right-3  p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
                <button onClick={()=>{
                    addToCart(id,product)
                    setAdd(true)
                    setTimeout(()=>{
                        setAdd(false)
                    },2000)
                    }}>
                    <div className='text-white h-12 w-12 flex p-3 justify-center bg-red-500 items-center
                    '>
                        <BsPlus className='text-3xl'/>
                    </div>
                </button>
                <Link to={`/product/${id}`} className='h-12 w-12 bg-white flex justify-center items-center drop-shadow-xl text-primary'>
                <BsEyeFill/>
                </Link>
            </div>
        </div>
        {/* {category and title and price} */}
        <div>
            <div className='text-sm capitalize text-gray-500 txt-sm mb-1'>{category}</div>
           <Link to={`/product/${id}`}>
           <h2 className='font-semibold mb-1'>{title}</h2>
           </Link>
            <h2 className='font-semibold'>$ {price}</h2>
            <p className={`${add?"opacity-100":"opacity-0"} text-green-500 text-sm font-semibold`}>Item added to cart!</p>
        </div>
    </div>
  )
}

export default Product