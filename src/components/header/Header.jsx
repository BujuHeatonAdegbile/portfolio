import React from 'react'
import "./header.css"
import avatar from "../../asset/avatar.png"

const Header = () => {
  return (
    <div id = "navbar">
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src= {avatar} alt="Logo" width="60" height="60" className="d-inline-block align-text-top brand-logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars icon-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item nav-item-me">
                <a className="nav-link nav-link-me" href="#about">About</a>
              </li>
              <li className="nav-item nav-item-me">
                <a className="nav-link nav-link-me" href="#techstack">Tech Stack</a>
              </li>
              <li className="nav-item nav-item-me">
                <a className="nav-link nav-link-me" href="#experience">Experience</a>
              </li>
              <li className="nav-item nav-item-me">
                <a className="nav-link nav-link-me" href="#projects">Projects</a>
              </li>
              <li className="nav-item nav-item-me">
                <a className="nav-link nav-link-me" href="#contact">Contact</a>
              </li>
              <div className = "button-center">
                <div className="main_div">
                    <a href = "https://www.linkedin.com/in/buju-heaton-adegbile-2658a4146/" target= "_blank"><button>Lets Connect <i className="fa-brands fa-linkedin fa-xl icon-padding"></i></button></a>
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