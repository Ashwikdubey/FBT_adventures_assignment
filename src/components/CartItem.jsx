import React, { useContext } from 'react'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { CartContext } from '../contexts/CartContext'

const CartItem = ({item}) => {
    const{title,image,price,id,amount}=item
    const{removeFromcart,increaseAmount,decreaseAmount}=useContext(CartContext)
  return (
    <div className='flex gap-x-4 py-2 border-b border-gray-200 font-light w-full text-gray-500 lg:px-6'>
        <div className='w-full max-h-[150px] flex items-center gap-x-4'>
                {/* {image} */}
            <Link to={`/product/${id}`}>
                <img className='max-w-[80px]' src={image} alt="" />
            </Link>
            <div className='w-full flex flex-col'>
                {/* {title and remove icon} */}
                <div className='flex justify-between mb-2'>
                    {/* title */}
                    <Link className='text-sm uppercase font-medium hover:underline text-primary max-w-[240px]'>{title}</Link>
                    {/* remove icon */}
                    <div onClick={()=>removeFromcart(id)} className='text-gray-500 hover:text-red-500 text-xl cursor-pointer'><IoMdClose/></div>
                </div>
                <div className=' flex gap-x-2 h-[36px] text-sm'>
                    {/* quantity */}
                    <div className='flex flex-1 max-w-[100px]  border text-primary items-center h-full font-medium'>
                        
                        {/* minus icon */}
                        <div onClick={()=>{decreaseAmount(id)}} className='h-full flex flex-1 justify-center items-center cursor-pointer'><IoMdRemove/></div>
                        {/* amount */}
                        <div className='h-full flex justify-center items-center px-2'>{amount}</div>
                        {/* plus icon */}
                        <div onClick={()=>increaseAmount(id)} className='h-full flex flex-1 justify-center items-center cursor-pointer '><IoMdAdd/></div>

                    </div>
                    {/* item price */}
                    <div className='flex flex-1 justify-around items-center'>
                        $ {price}
                    </div>

                    {/* final price */}
                    <div className='flex flex-1 justify-end items-center text-primary font-medium'>
                        {`$ ${price*amount}`}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem