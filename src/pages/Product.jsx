import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ProductCard from "../components/Product/ProductCard"
import Products from '../components/Product/Product'
import StickyChatButton from '../components/Home/StickyChatButton/StickyChatButton'

const Product = () => {
  return (
    <div>
     <Navbar/>
     <Products /><StickyChatButton/>
     <Footer/>
    </div>
  )
}

export default Product
