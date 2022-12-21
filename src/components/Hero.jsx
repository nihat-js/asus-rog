import './Hero.scss'

import hero_1 from '../assets/img/hero-1.webp'
import hero_2 from '../assets/img/hero-2.webp'
import hero_3 from '../assets/img/hero-3.webp'
import hero_4 from '../assets/img/hero-4.webp'
import hero_5 from '../assets/img/hero-5.webp'
import { useState } from 'react'


export default function Hero() {

   const [current_slider_value, set_current_slider_value] = useState(0)

   const slider_data = [hero_1, hero_2, hero_3, hero_4, hero_5]



   const renderNavigation = () => {
      const empty_array = [0, 0, 0, 0, 0]
      const result = empty_array.map((n, index) => {
         return <span key={index} className={index == current_slider_value ? 'el active' : 'el'} onClick={() => { set_current_slider_value(index) }} ></span>
      })
      return result
   }

   return (
      <section className="hero">
         <div className="container-fluid">
            <div className="row">
               <figure className='slider'>
                  <img src={slider_data[current_slider_value]} alt="" />
               </figure>
               <div className="navigation">
                  {/* {  () => {
                     console.log('debug')
                     return <h4> we</h4>
                     // return new Array(5).map(n, index => {
                     //    return (
                     //       <span className='el'>  </span>
                     //    )
                     // })
                  }} */}
                  {renderNavigation()}
                  {/* <span className='el'  ></span>
                  <span className='el'></span>
                  <span className='el'></span>
                  <span className='el'></span>
                  <span className='el'></span>
                  <span className='e'></span> */}
               </div>

            </div>
         </div>
      </section>
   )
}
