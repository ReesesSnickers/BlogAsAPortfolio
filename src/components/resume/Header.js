import React, { Component } from 'react';
import Avatar from '../Avatar';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            photo: "",
            email: ""
        };
    }

    componentDidUpdate() {
        if(this.props.user !== undefined && this.state.name === "") {
            this.setState({
                name: this.props.user.fullName,
                photo: this.props.user.photo.url,
                email: this.props.user.email
            })
        }
    }
    render() {
        return (
            <div style={{marginBottom: "25px"}}>
                <div style={{display: "flex"}}>
                    <div style={{marginTop: "25px", marginLeft: "25px", marginBottom: "25px", paddingRight: "25px"}}>
                        <Avatar img={"http://localhost:1337" + this.state.photo} height="250px" width="250px" />
                    </div>
                    <div style={{paddingRight: "25px"}}>
                        <p style={{color: "#000", fontSize: "90px", margin: "0px"}}>{this.state.name}</p>
                        <p style={{color: "#000", fontSize: "30px"}}>about my trade</p>
                    </div>
                    <p style={{color: "#000", margin: "0px", marginRight: "25px", fontSize: "30px"}}>What I'd be looking for</p>
                </div>
                <p style={{color: "#000", margin: "0px", fontSize: "30px", marginLeft: "25px"}}>{this.state.email}</p>
            </div>
        );
    }
}

export default Header;