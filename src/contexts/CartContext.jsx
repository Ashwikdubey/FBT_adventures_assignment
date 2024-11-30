import React, { createContext, useEffect, useState } from 'react'

//create context
export const CartContext=createContext()

const CartProvider = ({children}) => {
    //cart state
    const[cart,setCart]=useState([])
    //item amount state
    const[itemAmount,setItemAmount]=useState(0)
    //total price state
    const[total,setTotal]=useState(0)

    useEffect(()=>{
        const total=cart.reduce((accumulator,currentItem)=>{
            return accumulator+currentItem.price*currentItem.amount
        },0)
        setTotal(total)
    })
    // update item amount
    useEffect(()=>{
        if(cart){
            const amount=cart.reduce((accumulator,currentItem)=>{
                return accumulator+currentItem.amount
            },0)
            setItemAmount(amount)
        }
    },[cart])

    const addToCart=(id,product)=>{
       const newItem={...product,amount:1}
       //check if the item is already in the cart
       const cartItem=cart.length>=1&&cart.find((item)=>{
        return item.id===id
       })
       //if item is already in the cart
       if(cartItem){
        const newCart=[...cart].map((item)=>{
            if(item.id===id){
                return {...item,amount:cartItem.amount+1}
            }
            else{
                return item
            }
        })
        setCart(newCart)
       }
       else{
        setCart([...cart,newItem])
       }
       console.log(cart)
    }
    // remove from cart
    const removeFromcart=(id)=>{
        const newCart=cart.filter((item)=>{
            return item.id!==id
        })
        setCart(newCart)
    }
    // clear cart
    const clearCart=()=>{
        setCart([])
    }

    // increase amount
    const increaseAmount=(id)=>{
        const item=cart.length>=1&&cart.find((item)=>item.id===id)
        addToCart(id,item)
    }

    //decrease amount
    const decreaseAmount=(id)=>{
        const cartItem=cart.find((item)=>{ return item.id===id})
        if(cartItem){
            const newCart=cart.map((item)=>{
                if(item.id===id){
                    return {...item,amount:cartItem.amount - 1}
                }
                else{
                    return item
                }
            })
            setCart(newCart)
        }
        
            if(cartItem.amount < 2){
                console.log("removed")
                removeFromcart(id)
            }
    }
  return (
    <CartContext.Provider value={{cart,addToCart,clearCart,removeFromcart,increaseAmount,total,decreaseAmount,itemAmount}}>{children}</CartContext.Provider>
  )
}

export default CartProvider