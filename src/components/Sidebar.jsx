import React, { useContext } from 'react'
import {IoMdArrowForward} from "react-icons/io"
import {FiTrash2} from "react-icons/fi"
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import CartItem from './CartItem'

const Sidebar = () => {
  const {isOpen,handleClose}=useContext(SidebarContext)
  const {cart,clearCart,total}=useContext(CartContext)
  return (
    <div className={`${isOpen?"right-0":"-right-full"} w-full bg-white fixed h-full shadow-2xl top-0 md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className='flex items-center justify-between py-6 border-b'>
          <div className='font-semibold text-sm uppercase'>Shopping Bag (0)</div>
          {/* {icon} */}
        <div onClick={handleClose} className='cursor-pointer h-8 w-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2xl'/>
        </div>
      </div>
      <div className='flex flex-col gap-y-2 h-[250px] lg:h-[400px] overflow-y-auto overflow-x-hidden border-b'>{cart&& cart.map((item)=>{
        return(
         <div><CartItem key={item.id} item={item}/></div>
        )
      })}</div>
      <div className=' flex flex-col gap-y-3 py-4 mt-4'>
        <div className='flex w-full justify-between items-center'>
          {/* total */}
          <div className='uppercase font-semibold'>
            <span className='mr-2'>Total:</span>$ {(total).toFixed(2)}
          </div>
          {/* clear cart icon */}
          <div onClick={clearCart} className='bg-red-500 text-white h-12 w-12 flex justify-center cursor-pointer py-4'>
            <FiTrash2/></div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar