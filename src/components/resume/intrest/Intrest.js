import React, { Component } from 'react';

class Intrest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intrestName: "",
            intrestIcon: "",
        };
    }

    componentDidMount() {
        if ( this.props.intrest !== undefined ) {
            if( this.state.intrestName === "" ) {
                this.setState({
                    intrestName: this.props.intrest.name,
                    intrestIcon: this.props.intrest.icon.url
                })
            }
        }
    }

    render() {
        return (
            <div style={{textAlign: "center", width: "300px"}}>
                <img style={{height: "150px", width: "150px"}} src={"http://localhost:1337" + this.state.intrestIcon} alt={this.state.intrestName + " icon"}/>
                <p style={{color: "#000", fontSize: "30px", margin: "0"}}>{this.state.intrestName}</p>
            </div>
        );
    }
}

export default Intrest;