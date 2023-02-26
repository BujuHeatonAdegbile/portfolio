import React from 'react'
import "./footer.css"

const Footer = () => {

  const date = new Date()
  const currentYear = date.getFullYear()


  return (
    <div>
      <section id = "footer">
        <form>
          <div class="row">
            <div class="col form-floating mb-3">
              <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" />
            </div>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </div>
          <button>
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </form>
      </section>
      <div className = "footer-icon-div">
        <i className="fa-brands fa-linkedin fa-xl"></i>
        <i class="fa-brands fa-github fa-xl"></i>
      </div>
      <p id = "copyright">Copyright © {currentYear}. Made by Buju.</p>
      
    </div>
  )
}

export default Footer

