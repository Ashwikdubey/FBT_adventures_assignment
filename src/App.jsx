import { useState } from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/product/:id' element={<ProductDetails />}/>
      </Routes>
      <Sidebar/>
      </BrowserRouter>
    </div>
  )
}

export default App
