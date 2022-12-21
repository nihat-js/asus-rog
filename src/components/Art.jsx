import React from 'react'
import imgCover from '../assets/img/art-cover.jpg'
import './Art.scss'

export default function Art() {
  return (
   <section className="art">
      <div className="container-fluid">
      <img src={imgCover} alt="" />
      </div>
   </section>
  )
}
