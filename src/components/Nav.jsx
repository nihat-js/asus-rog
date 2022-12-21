import React from 'react'
import './Nav.scss'

import img_logo from '../assets/img/logo.jpg'
import img_search from "../assets/img/search.svg"
import img_profile from "../assets/img/profile.svg"
import img_asus from "../assets/img/asus.svg"

export default function Nav() {
   return (
      <>
         <nav className='main-nav'>
            <div className="container">
               <div className="row1">
                  <div className="logo">
                     <figure>
                        <img src={img_logo} alt="" />
                     </figure>
                  </div>
                  <div className="link">
                     <span><a href="!#">Products</a></span>
                     <span><a href="!#">Innovation</a></span>
                     <span><a href="!#">Downloads</a></span>
                     <span><a href="!#">Community</a></span>
                     <span><a href="!#">What's Hot</a></span>
                     <span><a href="!#">Support</a></span>
                  </div>
                  <div className="action">
                     <figure className="home">
                        <img src={img_asus} alt="" />
                     </figure>
                     <figure className="search">
                        <img src={img_search} alt="" />
                     </figure>
                     <figure className="profile">
                        <img src={img_profile} alt="" />
                     </figure>
                  </div>
               </div>
            </div>
         </nav>
         <nav className="search-nav">
            <div className="container">
               <div className="form-group">
                  <input type="text" />
                  <img src="" alt="" />
               </div>
               <div className="suggested">
                  <div className="panel">
                     <h3 className='text'> ROG Rapture GT6 </h3>
                  </div>
                  <div className="panel">
                     <h3 className='text'> ROG Strix G17 (2022) </h3>
                  </div>
                  <div className="panel">
                     <h3 className='text'> ROG Phone 6 Diablo Immortal Edition </h3>
                  </div>
                  <div className="panel">
                     <h3 className='text'> ROG Strix GeForce RTX 4090 24GB GDDR6X </h3>
                  </div>
                  <div className="panel">
                     <h3 className='text'> ROG Swift PG32UQX </h3>
                  </div>

               </div>
            </div>
         </nav>
      </>

   )
}
