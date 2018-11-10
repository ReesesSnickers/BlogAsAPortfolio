import React from 'react'

import '../../node_modules/bulma/css/bulma.min.css';
import '../css/prevbapp.css';


const Footer = () => (
    <div>
        <footer className="footer" style={{backgroundColor: "#C44900"}}>
            <div className="columns">
                <div className="column is-one-quarter has-text-centered">
                    <p>PENDING CONTENT</p>
                </div>
                <div className="column is-half">
                    <div className="content has-text-centered">
                        <a href="https://bulma.io">
                            <img src="" alt="Made with Bulma" width="128" height="24" />
                        </a>
                    </div>
                </div>
                <div className="column is-one-quarter has-text-centered">
                    <p>PENDING CONTENT</p>
                </div>
            </div>
        </footer>
    </div>
)

export default Footer