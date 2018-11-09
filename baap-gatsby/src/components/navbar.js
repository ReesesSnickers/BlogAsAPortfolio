import React from 'react'

import '../css/prevbapp.css';
import '../../node_modules/bulma/css/bulma.min.css';

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import {  } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 
// library.add( fab )
import '../../node_modules/@fortawesome/free-brands-svg-icons'
import '../../node_modules/@fortawesome/free-solid-svg-icons'


const Navbar = () => (
    <div>
        <nav className="navbar is-transparent is-fixed-top">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
        </a>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    
      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item" href="./home.html" id="home">
            Home
          </a>
          <a className="navbar-item" href="./blog.html" id="blog">
            Blog
          </a>
          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link" href="" id="aboutMe">
              About Me
            </a>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item" href="./overview.html" id="navbarAboutMeDropdownText">
                Overview
              </a>
              <a className="navbar-item" href="./languages.html" id="navbarAboutMeDropdownText">
                Languages
              </a>
              <a className="navbar-item" href="./projecthistory.html" id="navbarAboutMeDropdownText">
                Project History
              </a>
              <a className="navbar-item" href="./specialthanks.html" id="navbarAboutMeDropdownText">
                Special Thanks
              </a>
            </div>
          </div>
        </div>
    
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a className="bd-tw-button button" data-social-network="Facebook" data-social-action="" data-social-target="" target="" href="">
                  <span className="icon">
                    <i className="fab fa-facebook-square"></i>
                  </span>
                  <span id="facebookText">
                    Facebook
                  </span>
                </a>
              </p>
              <p className="control">
                <a className="button" href="https://github.com/ReesesSnickers">
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>
                  <span id="githubText">
                    Github
                  </span>
                </a>
              </p>
              <p className="control">
                <a className="button" href="https://www.linkedin.com/in/bobbyleeingalls">
                  <span className="icon">
                    <i className="fab fa-linkedin"></i>
                  </span>
                  <span id="linkedinText">
                    Linkedin
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
)

export default Navbar