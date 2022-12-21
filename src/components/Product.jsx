import React, { useState } from 'react'
import './Product.scss'

import img_arrow_left from "../assets/img/left-arrow.svg"
import img_arrow_right from "../assets/img/right-arrow.svg"


import product_1 from '../assets/img/product-1.png'
import product_2 from '../assets/img/product-2.png'
import product_3 from '../assets/img/product-3.png'
import product_4 from '../assets/img/product-4.png'
import product_5 from '../assets/img/product-5.png'
import product_6 from '../assets/img/product-6.png'
import product_7 from '../assets/img/product-7.png'
import product_8 from '../assets/img/product-8.png'


// 0 1 2 3  
//  4

export default function Product() {

   const slider_data = [product_1, product_2, product_3, product_4, product_5, product_6, product_7, product_8]

   const [slider_start_value, set_slider_start_value] = useState(0)


   const render_slider = () => {
      let current_value = slider_start_value;
      const empty_arr = new Array(5)
      let result = empty_arr.map(n => {
         return <h3> game </h3>
      })
      console.log(result)
      return result
   }

   const slider_action = () => {

   }


   return (
      <section className="product">
         <div className="container">
            <h2 className="heading">Explore our Products    </h2>
            <div className="row">
               <div className="slider">
                  {render_slider()}
               </div>
               <div className="navigation">
                  <figure className='left'>
                     <img onClick={() => slider_action('previous')} src={img_arrow_left} alt="" />
                  </figure>
                  <figure className='right'>
                     <img onClick={() => slider_action('next')} src={img_arrow_right} alt="" />
                  </figure>
               </div>
            </div>
         </div>
      </section>
   )
}
