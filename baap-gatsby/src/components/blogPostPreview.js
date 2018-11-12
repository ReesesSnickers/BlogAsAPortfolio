import React from 'react'

import '../../node_modules/bulma/css/bulma.css';
import '../../node_modules/bulma/css/bulma.min.css';
import '../css/prevbapp.css';

const BlogPreview = (props) => (
    <div className="column is-half TransparentHomeDiv">
        <div className="card" style={{borderRadius: "25px"}}>
            <header className="card-header">
                <p className="card-header-title">
                    {props.title}
                </p>
            </header>
            <div className="card-content">
                <figure class="image">
                    <img src="https://via.placeholder.com/728x150.png" alt="Placeholder image"/>
                    {/* <img src={props.image} alt="Opps something went wrong"/> */}
                </figure>
                <br/>
                <div class="content">
                    {props.introduction}
                </div>
            </div>
            <footer class="card-footer">
                <a href="#" class="card-footer-item">View More</a>
                <a href="#" class="card-footer-item">Share</a>
            </footer>
        </div>
    </div>       
)

export default BlogPreview;