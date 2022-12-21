import './Hero.scss'

import hero_1 from '../assets/img/hero-1.webp'
import hero_2 from '../assets/img/hero-2.webp'
import hero_3 from '../assets/img/hero-3.webp'
import hero_4 from '../assets/img/hero-4.webp'
import hero_5 from '../assets/img/hero-5.webp'


export default function Hero() {
   return (
      <section className="hero">
         <div className="container-fluid">
            <div className="row">
               <figure className='slider'>
                  <img src={hero_1} alt="" />
               </figure>
               <div className="navigation">
                  {() => {
                     console.log('debug')
                     return <h4> we</h4>
                     // return new Array(5).map(n, index => {
                     //    return (
                     //       <span className='el'>  </span>
                     //    )
                     // })
                  }}
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
