import React from 'react'
import './Product.scss'
import product_1 from '../assets/img/product-1.png'
import product_2 from '../assets/img/product-2.png'
import product_3 from '../assets/img/product-3.png'
import product_4 from '../assets/img/product-4.png'
import product_5 from '../assets/img/product-5.png'
import product_6 from '../assets/img/product-6.png'
import product_7 from '../assets/img/product-7.png'
import product_8 from '../assets/img/product-8.png'

export default function Product() {
  return (
   <section className="product">
      <div className="container">
         <h2 className="heading">Explore our Products    </h2>
         <div className="row">
            <div className="slider">
               <figure>
                  <img src={product_1} alt="" />
               </figure>
               <figure>
                  <img src={product_2} alt="" />
               </figure>
               <figure>
                  <img src={product_3} alt="" />
               </figure>
               <figure>
                  <img src={product_4} alt="" />
               </figure>
               <figure>
                  <img src={product_5} alt="" />
               </figure>
            </div>
            <div className="navigation">
               <span className="left">  ←  </span>
               <span className="right">  → </span>
            </div>
         </div>
      </div>
   </section>
  )
}
