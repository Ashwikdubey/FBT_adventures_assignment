import React, { createContext, useEffect, useState } from 'react'

//create context
export const ProductContext=createContext()


const ProductProvider = ({children}) => {
    //product state
    const[products,setProducts]=useState()
    const[loading,setLoading]=useState(false)
    //fetch products
    useEffect(()=>{
        fetchProducts()
    },[])
    const fetchProducts=async ()=>{
      setLoading(true)
        const response=await fetch('https://fakestoreapi.com/products')
        const data=await response.json()
        setProducts(data)
        setLoading(false)
    }
  return (
    <ProductContext.Provider value={{products,loading}}>{children}</ProductContext.Provider>
  )
}

export default ProductProvider