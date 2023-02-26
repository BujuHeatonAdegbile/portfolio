import React from 'react'
import "./techstack.css"
import { icons } from './teckstackData'


const TechStack = () => {
  return (
    <section id = "techstack">
      <h2><span class = "transparent-text">Check Out </span><span class = "blue-text">My </span><br/><span class = "white-text">Tech-Stack</span></h2>
      <div class = "container">
        <div class ="row">
          {icons.map(element => {
            return(
              <div class = "col-lg-4 col-md-4 col-sm-6 tech-stack-padding">
                <div class="card">
                  <img src = {element.src} alt = {element.name}/>
                </div>
                <p className = "tech-p">{element.name}</p>
              </div>
            )

          })}
          



         




          {/* <div class = "col-lg-3 col-md-4 col-sm-6 tech-stack-padding">
            <div class="card">
              {icons.map((icon, id) => {
                return(
                  <div key = {id}>
                    {icon.src}
                  </div>
                 )
              })}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default TechStack