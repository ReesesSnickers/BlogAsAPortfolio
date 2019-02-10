import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        return (
            <nav style={{width: "100vw", height: "56px", background: "linear-gradient(#001F54, #000)"}}>
                    <div style={{paddingTop: "15px", paddingLeft: "10px"}} onClick={() => alert("clicked the hamburger")}>
                        <div style={{borderRadius: "25px", height: "3px", width: "30px", marginBottom: "5px", backgroundColor: "#FFF"}}/>
                        <div style={{borderRadius: "25px", height: "3px", width: "30px", marginBottom: "5px", backgroundColor: "#FFF"}}/>
                        <div style={{borderRadius: "25px", height: "3px", width: "30px", backgroundColor: "#FFF"}}/>
                    </div>
                    <div style={{position: "absolute", top: "10px", right: "10px"}} onClick={() => alert("clicked the logo")}>
                        <img src="http://localhost:1337/uploads/12f00c4362824c439abf7320f11d1ae0.png" alt={this.props.altText} style={{height: "30px"}} />
                    </div>
            </nav>
        )
    }
};

Nav.ropTypes = {
    img: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
};

Nav.defaultProps = {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMkwu3ZNbQOEW26pWoXURqYWSeGAJx1EqzJBJg46eBqTg1WhD',
    altText: "default logo"
};

export default Nav;