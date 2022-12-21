import React from 'react'
import ActionCard from './ActionCard'
import imgAction1 from '../assets/img/action-1.webp'
import imgAction2 from '../assets/img/action-2.webp'
import imgAction3 from '../assets/img/action-3.webp'
export default function Action() {
   const data = [
      {
         src:  imgAction1,
         tag : 'gaming',
         heading : " AFTER ONE YEAR WITH XBOX GAME PASS, I'M NEVER GIVING IT UP" , 
         subheading : "I once dreamed of "
      },
      {
         src:  imgAction2,
         tag : 'gaming',
         heading : " AFTER ONE YEAR WITH XBOX GAME PASS, I'M NEVER GIVING IT UP" , 
         subheading : "I once dreamed of "
      },
      {
         src:  imgAction3,
         tag : 'gaming',
         heading : " AFTER ONE YEAR WITH XBOX GAME PASS, I'M NEVER GIVING IT UP" , 
         subheading : "I once dreamed of "
      }
   ]
   return (
      <section className="action">
         <div className="container">
            <h2 className="subheading">Rog In Action</h2>
            <div className="row">
               {data.forEach(x => {
                  return (
                     <ActionCard data={x} ></ActionCard>
                  )
               })}
            </div>
         </div>
      </section>
   )
}
