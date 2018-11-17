import React from 'react'

import '../../node_modules/bulma/css/bulma.css';
import '../../node_modules/bulma/css/bulma.min.css';

const BlogPreview = (props) => (
    <div className="column is-half TransparentHomeDiv">
        <div className="card" style={{borderRadius: "25px"}}>
            <header className="card-header">
                <p className="card-header-title" style={{justifyContent: "center", fontSize: "16px"}}>
                    {props.title}
                </p>
            </header>
            <div className="card-content">
                <figure className="image">
                    <img src="https://via.placeholder.com/728x150.png" alt="Placeholder image"/>
                    {/* <img src={props.image} alt="Opps something went wrong"/> */}
                </figure>
                <br/>
                <div className="content" style={{textAlign: "Justify", overflow: "auto", wordWrap: "break-word"}}>
                    {props.introduction}
                </div>
            </div>
            <footer className="card-footer">
                <a href="#" className="card-footer-item">View More</a>
                <a href="#" className="card-footer-item">Share</a>
            </footer>
        </div>
    </div>       
)

export default BlogPreview;