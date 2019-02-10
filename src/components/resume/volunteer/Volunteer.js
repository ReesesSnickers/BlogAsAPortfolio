import React, { Component } from 'react';

class Volunteer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            volunteerName: "",
            volunteerDetails: "",
            volunteerSupported: "",
            volunteerYear: "",
        };
    }

    componentDidUpdate() {
        if ( this.props.volunteer !== undefined ) {
            if ( this.state.volunteerName === "" ) {
                this.setState({
                    volunteerName: this.props.volunteer.name,
                    volunteerDetails: this.props.volunteer.details,
                    volunteerSupported: this.props.volunteer.supported,
                    volunteerYear: this.props.volunteer.year.split('-')[0],
                })
            }
        }
    }

    render() {
        return (
            <div style={{display: "flex", marginLeft: "25px", marginBottom: "25px"}}>
                <div>
                    <p style={{color: "#000", margin: "0px"}}><b>Role: </b>{this.state.volunteerName}</p>
                    <div style={{display: "flex"}}>
                        <p style={{color: "#000", margin: "0px", paddingRight: "20px"}}><b>Supported: </b>{this.state.volunteerSupported}</p>
                        <p style={{color: "#000", margin: "0px"}}><b>Completed: </b>{this.state.volunteerYear}</p>
                    </div>
                    <div>
                        <p style={{color: "#000", margin: "0px"}}><b>Details:</b></p>
                        <p style={{color: "#000", margin: "0px"}}>{this.state.volunteerDetails}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Volunteer;