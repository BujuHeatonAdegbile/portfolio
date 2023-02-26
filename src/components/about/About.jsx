import React from 'react'
import "./about.css"
import me from "../../asset/me.png"



const About = () => {
  return (
    <section id = "about">

      <h2><span class = "blue-text">But First, </span><span class = "white-text">A Bit </span><br/><span class = "transparent-text">About Me</span></h2>
      <div class = "row about-padding">
        <div class = "col-lg-6 about-flex">
          <img class = "me" src = {me} alt="Buju Heaton-Adegbile" width="450" height="450"/>
        </div>
        <div class = "col-lg-6">
          <h4>My Professional Summary</h4>
          <p>I am an experienced data and AI consultant with extensive skills and experience in delivering data-related strategies to customers in the retail and construction industries. Proficient in business intelligence, automation, AI technologies and web development, with a proven track record of delivering impactful results. Committed to staying up to date with the latest industry developments and utilising cutting-edge technologies to drive business success.</p>
          <div class = "button-box">
            <button className = "cv-btn">Download CV</button>
            <a href="https://github.com/BujuHeatonAdegbile" target="_blank"><button className = "github-btn">GitHub <i class="fa-brands fa-github fa-xl icon-padding"></i></button></a>
          </div>
          
        </div>
      </div>

    </section>
  )
}

export default About