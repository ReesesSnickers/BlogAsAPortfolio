import React from 'react'

import '../../node_modules/bulma/css/bulma.css';
import '../../node_modules/bulma/css/bulma.min.css';



const Home = () => (
    <div>
        <div>IM HERE</div>
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
    </div>
)

export default Home