import React from 'react'
import './ActionCard.scss'

export default function ActionCard(props) {
  return (  
      <div className='action-card'>
         
         <figure>
            <img src={props.data.src} alt="" />
         </figure>
         <div className="tag">
            <p className="text"> {props.data.tag} </p>
         </div>
         <p className="heading"> {props.data.heading} </p>
         <p className="subheading" >  {props.data.subheading} </p>
      </div>
  )
}
