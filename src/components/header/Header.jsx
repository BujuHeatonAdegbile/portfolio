import React from 'react'
import "./header.css"
import avatar from "../../asset/avatar.png"

const Header = () => {
  return (
    <div id = "navbar">
        <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src= {avatar} alt="Logo" width="60" height="60" class="d-inline-block align-text-top brand-logo" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-bars icon-white"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item nav-item-me">
                <a class="nav-link nav-link-me" href="#about">About</a>
              </li>
              <li class="nav-item nav-item-me">
                <a class="nav-link nav-link-me" href="#techstack">Tech Stack</a>
              </li>
              <li class="nav-item nav-item-me">
                <a class="nav-link nav-link-me" href="#experience">Experience</a>
              </li>
              <li class="nav-item nav-item-me">
                <a class="nav-link nav-link-me" href="#projects">Projects</a>
              </li>
              <li class="nav-item nav-item-me">
                <a class="nav-link nav-link-me" href="#contact">Contact</a>
              </li>
              <div class = "button-center">
                <div class="main_div">
                    <a href = "https://www.linkedin.com/in/buju-heaton-adegbile-2658a4146/" target= "_blank"><button>Lets Connect <i class="fa-brands fa-linkedin fa-xl linkdin-icon"></i></button></a>
                </div> 
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header