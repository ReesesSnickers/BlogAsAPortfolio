import React from 'react'

import '../../node_modules/bulma/css/bulma.css';
import '../../node_modules/bulma/css/bulma.min.css';



const Home = (props) => (
    <div>
        <div className="columns TransparentHomeDiv">
            <div className="column homedivider1">
            </div>
        </div>
        <div className="columns TransparentHomeDiv">
            <div className="column"></div>
        </div>

        <div className="columns">
            <div className="column TransparentHomeDiv" style={{color: "#FFFFFF", fontWeight: "bold", fontSize: "5vh"}}>
                <p>Hello and welcome to the the BGI Blog. Here you can find interesting technology video's, blog articles and information about my programming experience.</p>
            </div>
        </div>

        <div className="columns">
            <div className="column homedivider2">
            </div>
        </div>
        <div className="columns TransparentHomeDiv">
            <div className="column"></div>
        </div>
        
        <div className="columns" onClick={() => {console.log(props.blogs[0][0])}}>
            <div className="column is-half TransparentHomeDiv">
                <section className="section">
                    <div className="container">
                    </div>
                </section>
            </div>
        </div>

        <div className="columns">
            <div className="column is-half TransparentHomeDiv">
                <section className="section">
                    <div className="container">
                    </div>
                </section>
            </div>
        </div>

        <div className="columns">
            <div className="column is-half TransparentHomeDiv">
                <section className="section">
                    <div className="container">
                    </div>
                </section>
            </div>
        </div>

        <div className="columns TransparentHomeDiv">
            <div className="column"></div>
        </div>
        <div className="columns TransparentHomeDiv" style={{paddingBottom: "0vh", marginBottom: "0vh"}}>
            <div className="column"style={{paddingBottom: "0vh"}}>
                <div className="homedivider1"></div>
            </div>
        </div>
    
  
{/* <div className='carousel carousel-animated carousel-animate-slide' Style="background-color: #111111" data-size="5">
    <div className='carousel-container' id="videoDiv">
      <div className='carousel-item is-active'>
        <iframe className="is-2by1" src="https://www.youtube.com/embed/Gae3mb7qF7E" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div className='carousel-item'>
        <iframe className="is-2by1" src="https://www.youtube.com/embed/us4HTxtjfa8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div className='carousel-item'>
        <iframe className="is-2by1" src="https://www.youtube.com/embed/F9GujgK0y2M" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div className='carousel-item'>
        <iframe className="is-2by1" src="https://www.youtube.com/embed/XhgUClE5uC0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div className='carousel-item'>
        <iframe className="is-2by1" src="https://www.youtube.com/embed/4MxRhjHmiVw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div className='carousel-item'>
        <iframe className="is-2by1" src="https://www.youtube.com/embed/_P9HqHVPeik" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div className='carousel-item'>
        <iframe className="is-2by1" src="https://www.youtube.com/embed/y4XPudpy-vo" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div className='carousel-item'>
        <iframe className="is-2by1" src="https://www.youtube.com/embed/E2KOqRceipM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
      <div className='carousel-item'>
        <iframe className="is-2by1" src="https://www.youtube.com/embed/__SWFhHocDI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    </div>
    <div className="carousel-navigation is-centered">
      <div className="carousel-nav-left">
        <i className="fa fa-chevron-left" aria-hidden="true"></i>
      </div>
      <div className="carousel-nav-right">
        <i className="fa fa-chevron-right" aria-hidden="true"></i>
      </div>
    </div>
  </div> */}

    </div>
)

export default Home