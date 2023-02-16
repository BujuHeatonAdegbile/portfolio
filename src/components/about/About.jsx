import React from 'react'
import "./about.css"
import me from "../../asset/me.png"


const About = () => {
  return (
    <section id = "about">

      <h2><span class = "blue-text">But First, </span><span class = "white-text">A Bit </span><br/><span class = "transparent-text">About Me</span></h2>
      <div class = "row row-me">
        <div class = "col-lg-6 col-md-6 col-sm-12">
          <img class = "me img-fluid" src = {me} alt="" width="600" height="600"/>
        </div>
        <div class = "col-lg-6 col-md-6 col-sm-12">
          <h4>My Professional Summary</h4>
          <p>I am an experienced data and AI consultant with extensive skills and experience in delivering data-related strategies to customers in the retail and construction industries. Proficient in business intelligence, automation, AI technologies and web development, with a proven track record of delivering impactful results. Committed to staying up to date with the latest industry developments and utilising cutting-edge technologies to drive business success.</p>
          <div class = "button-box">
            <button>Download CV</button>
            <button class = "github-btn">GitHub <i class="fa-brands fa-github fa-xl icon-padding"></i></button>
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default About