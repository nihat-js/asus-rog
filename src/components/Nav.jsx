import React, { useState } from 'react'
import './Nav.scss'

import img_logo from '../assets/img/logo.jpg'
import img_search from "../assets/img/search.svg"
import img_profile from "../assets/img/profile.svg"
import img_asus from "../assets/img/asus.svg"
import img_hamburger from "../assets/img/hamburger.svg"
import img_profile_black from "../assets/img/profile-black.svg"
import img_close from '../assets/img/close.svg'

export default function Nav() {

   const [displaySearch, setDisplaySearch] = useState(false)
   const [displaySecondBox, setDisplaySecondBox] = useState(false)

   const renderSecondBox = () => {

   }

   return (
      <>
         <nav className='main-nav'>
            <div className="container">
               <div className="row1">
                  <div className="hamburger d-none">
                     <figure>
                        <img src={img_hamburger} alt="" />
                     </figure>
                  </div>
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
                        <img src={img_search} onClick={() => { setDisplaySearch(!displaySearch) }} alt="" />
                     </figure>
                     <figure className="profile">
                        <img src={img_profile} alt="" />
                     </figure>
                  </div>
               </div>
            </div>
         </nav>
         <nav className={displaySearch ? 'search-nav ' : 'search-nav d-none'}    >
            <div className="container">
               <div className="form-group">
                  <input type="text" />
                  <span className='close' onClick={() => { setDisplaySearch(!displaySearch) }}   > &times; </span>
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
         <nav className="mobile-nav">
            <div className="container">
               <div className="row-top">
                  <figure>
                     <img src={img_profile_black} alt="" />
                  </figure>
                  <figure>
                     <img src={img_close} alt="" />
                  </figure>
               </div>
               <div className="main-box">
                  <div className="panel">
                     <h2 className="text"> Products </h2>
                  </div>
                  <div className="panel">
                     <h2 className="text"> Innovation </h2>
                  </div>
                  <div className="panel">
                     <h2 className="text"> Downloads </h2>
                  </div>
                  <div className="panel">
                     <h2 className="text"> Community </h2>
                  </div>
                  <div className="panel">
                     <h2 className="text"> What's Hot </h2>
                  </div>
                  <div className="panel">
                     <h2 className="text"> Support </h2>
                  </div>
               </div>
               {/* {renderSecondBox} */}
            </div>
         </nav>
      </>

   )
}


function SecondBox(props) {
   return (
      <>
         <section className='second-box'>

         </section>
      </>
   )
}