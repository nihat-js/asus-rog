import story_bg from '../assets/img/story-bg.jpg'
import story_1 from '../assets/img/story-1.webp'
import story_2 from '../assets/img/story-2.webp'
import story_3 from '../assets/img/story-3.webp'
import story_4 from '../assets/img/story-4.webp'
import story_5 from '../assets/img/story-5.webp'
import  './Story.scss'



export default function Story() {

   let section_style = {
      "backgroundImage" :  story_bg
   }

   return (
      <section className="story" style={section_style}>
         <div className="container" >
            <h2 className="heading"> Recent Stories </h2>
            <div className="row-1">
               <figure>
                  <img src={story_1} alt="" />
                  <figcaption> STEAL THE SPOTLIGHT WITH THE NEW ROG STRIX GEFORCE RTX 4090 AND RTX 4080 WHITE EDITION CARDS</figcaption>
               </figure>
               <figure>
                  <img src={story_2} alt="" />
                  <figcaption> WHAT IS A VAPOR CHAMBER, AND HOW DOES IT IMPROVE MY PC’S COOLING?  </figcaption>
               </figure>
               <figure>
                  <img src={story_3} alt="" />
               </figure>
            </div>
            <div className="row-2">
               
               <figure>
                  <img src={story_4} alt="" />
               </figure>
               <figure>
                  <img src={story_5} alt="" />
               </figure>
            </div>
            <div className="learn">
               <a href="">Learn more</a>
            </div>
         </div>
      </section>
   )
}
