import React from 'react'
import "./techstack.css"

const TechStack = () => {
  return (
    <section id = "techstack">
      <h2><span class = "transparent-text">Check Out </span><span class = "blue-text">My </span><br/><span class = "white-text">Tech-Stack</span></h2>
      <div class = "container">
        <div class ="row">
          <div class = "col-lg-3 col-md-4 col-sm-6">
            <div class="card">
              <h4>HTML</h4>
              <p>Web Development</p>
            </div>
          </div>
          <div class = "col-lg-3 col-md-4 col-sm-6">
            <div class="card">
              <h4>CSS</h4>
              <p>Web Development</p>
            </div>
          </div>
          <div class = "col-lg-3 col-md-4 col-sm-6">
            <div class="card">
              <h4>JAVASCRIPT</h4>
            </div>
          </div>
          <div class = "col-lg-3 col-md-4 col-sm-6">
            <div class="card test"></div>
          </div>
          <div class = "col-lg-3 col-md-4 col-sm-6">
            <div class="card"></div>
          </div>
          <div class = "col-lg-3 col-md-4 col-sm-6">
            <div class="card"></div>
          </div>
          <div class = "col-lg-3 col-md-4 col-sm-6">
            <div class="card"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechStack