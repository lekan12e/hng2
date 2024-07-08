import React from 'react'
import NavBar from '../component/NavBar'
import { useParams } from 'react-router-dom'
import Footer from '../view/Footer'

const ProductPage = () => {
  return (
    <div className='flex flex-col'>
        <NavBar />
        <Footer />
    </div>
  )
}

export default ProductPage