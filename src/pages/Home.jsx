import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import Product from '../components/Product'

const Home = () => {
  //get products from product context
  const{products,loading}=useContext(ProductContext)
  //get only men's and women's clothing category
  const filteredProducts=products&&products.filter((f)=>{
    return f.category==="men's clothing"||f.category==="women's clothing"
  })
  return (
    <div>
      <section className='py-16'>
      <div className='mx-auto container'>
       {loading?"Loading...":(
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
         mx-auto max-w-sm md:max-w-none md:mx-0'>
           {filteredProducts&& filteredProducts.map((p)=>{
             return(
             <Product product={p} key={p.id}/>
             )
           })}
         </div>
       )}
      </div>
    </section>
    </div>
  )
}

export default Home