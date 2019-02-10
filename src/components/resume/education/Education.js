import React, { Component } from 'react';

class Education extends Component {
    constructor(props) {
        super(props);
        this.state = {
            educationName: "",
            educationMajor: "",
            educationMinor: "",
            educationEnrolled: "",
            educationCompleted: ""
        };
    }

    componentDidMount() {
        if ( this.props.education !== undefined ) {
            if ( this.state.educationName === "" ) {

                let completed
                if (this.props.education.completed === null) {
                    completed = ""
                } else {
                    completed = this.props.education.completed.split("-")[0]
                }

                this.setState({
                    educationName: this.props.education.name,
                    educationMajor: this.props.education.major,
                    educationMinor: this.props.education.minor,
                    educationEnrolled: this.props.education.enrolled.split("-")[0],
                    educationCompleted: completed
                })
            }
        }
    }

    render() {
        return (
            <div style={{paddingRight: "20px", paddingTop: "20px", marginLeft: "25px"}}>
                <p style={{color: "#000", margin: "0px"}}><b>School:</b></p>
                <p style={{color: "#000", margin: "0px"}}>{this.state.educationName}</p>
                <div style={{display: "flex"}}>
                    <div style={{marginRight: "20px"}}>
                        <p style={{color: "#000", margin: "0px"}}><b>Major:</b></p>
                        <p style={{color: "#000", margin: "0px"}}>{this.state.educationMajor}</p>
                    </div>
                    <div>
                        <p style={{color: "#000", margin: "0px"}}><b>Minor:</b></p>
                        <p style={{color: "#000", margin: "0px"}}>{this.state.educationMinor}</p>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <div style={{marginRight: "20px"}}>
                        <p style={{color: "#000", margin: "0px"}}><b>Enrolled:</b></p>
                        <p style={{color: "#000", margin: "0px"}}>{this.state.educationEnrolled}</p>
                    </div>
                    <div>
                        <p style={{color: "#000", margin: "0px"}}><b>Completed:</b></p>
                        <p style={{color: "#000", margin: "0px"}}>{this.state.educationCompleted}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;