import React from 'react'

import './App.scss'
import Nav from './components/Nav'
import Banner from './components/Banner'
import Hero from './components/Hero'
import Product from './components/Product'
import Story from './components/Story'
import Action from './components/Action'
import Art from './components/Art'
import Footer from './components/Footer'

export default function App() {

   const [color,setColor] = React.useState(false)

   return (
      <div className={color ? 'bg-dark' : ''}>
         <button onClick={ () =>  setColor(!color)}> Change  </button>
         <Nav> </Nav>
         <Banner> </Banner>
         <Hero></Hero>
         <Product></Product>
         <Story> </Story>
         <Action></Action>
         <Art></Art>
         <Footer></Footer>
      </div>
   )
}
