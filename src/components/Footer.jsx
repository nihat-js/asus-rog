import React from 'react'

import img_facebook from '../assets/img/facebook.svg'
import img_discord from '../assets/img/discord.svg'
import img_twitter from '../assets/img/twitter.svg'
import img_youtube from '../assets/img/youtube.svg'
import img_twitch from '../assets/img/twitch.svg'
import img_instagram from '../assets/img/instagram.svg'

import './Footer.scss'

export default function Footer() {
   return (
      <footer>
         <div className="container">
            <div className="row-1">
               <div className="link">
                  <span><a href="">About Rog  </a></span>
                  <span><a href="">Home </a></span>
                  <span><a href=""> Newsroom</a></span>
                  <span><a href=""> Accessibility help</a></span>
               </div>
               <div className="media">
                  <img src={img_facebook} alt="" srcset="" />
                  <img src={img_twitter} alt="" srcset="" />
                  <img src={img_discord} alt="" srcset="" />
                  <img src={img_youtube} alt="" srcset="" />
                  <img src={img_twitch} alt="" srcset="" />
                  <img src={img_instagram} alt="" srcset="" />
               </div>
            </div>
         </div>
      </footer>
   )
}
