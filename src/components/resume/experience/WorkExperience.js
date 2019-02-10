import React, { Component } from 'react';

class WorkExperience extends Component {
    constructor(props) {
        super(props);
        this.state = {
            experienceCompany: "",
            experienceContact: "",
            experienceContactNumber: "",
            experienceResponsabilities: "",
            experienceTitle: "",
            experienceStarted: "",
            experienceEnded: "",
            experienceIcon: "",
        };
    }

    componentDidMount() {
        if ( this.props.experience.length !== 0 ) {
            if ( this.state.experienceCompany === "" ) {

                let dateEnded
                if (this.props.experience.ended === null ) {
                    dateEnded = "Still Employed"
                } else {
                    dateEnded = this.props.experience.ended.split('T')[0]
                }

                this.setState({
                    experienceCompany: this.props.experience.company,
                    experienceContact: this.props.experience.contactName,
                    experienceContactNumber: this.props.experience.contactNumber,
                    experienceResponsabilities: this.props.experience.responsabilities,
                    experienceTitle: this.props.experience.title,
                    experienceStarted: this.props.experience.started.split("T")[0],
                    experienceEnded: dateEnded,
                    experienceIcon: this.props.experience.icon.url,
                })
            }
        }
    }

    render() {
        return (
            <div style={{marginBottom: "25px"}}>
                <div style={{display: "flex", marginBottom: "10px"}}>
                    <div style={{marginLeft: "25px", marginRight: "25px"}}>
                        <img style={{height: "150px", width: "150px"}} src={"http://localhost:1337" + this.state.experienceIcon} alt={this.state.experienceCompany + " icon"} />
                    </div>
                    <div>
                        <div style={{display: "flex", marginBottom: "20px"}}>
                            <div style={{paddingRight: "20px"}}>
                                <p style={{color: "#000", margin: "0px"}}><b>Company:</b></p>
                                <p style={{color: "#000", margin: "0px"}}>{this.state.experienceCompany}</p>
                            </div>
                            <div style={{paddingRight: "20px"}}>
                                <p style={{color: "#000", margin: "0px"}}><b>Started:</b></p>
                                <p style={{color: "#000", margin: "0px"}}>{this.state.experienceStarted}</p>
                            </div>
                            <div>
                                <p style={{color: "#000", margin: "0px"}}><b>Ended:</b></p>
                                <p style={{color: "#000", margin: "0px"}}>{this.state.experienceEnded}</p>
                            </div>
                        </div>
                        <div style={{display: "flex", marginBottom: "20px"}}>
                            <div style={{paddingRight: "20px"}}>
                                <p style={{color: "#000", margin: "0px"}}><b>Contact for this Company:</b></p>
                                <p style={{color: "#000", margin: "0px"}}>{this.state.experienceContact}</p>
                            </div>
                            <div>
                                <p style={{color: "#000", margin: "0px"}}><b>Contact Number:</b></p>
                                <p style={{color: "#000", margin: "0px"}}>{this.state.experienceContactNumber}</p>
                            </div>
                        </div>
                        <p style={{color: "#000", margin: "0px"}}><b>Title:</b></p>
                        <p style={{color: "#000", margin: "0px"}}>{this.state.experienceTitle}</p>
                    </div>
                </div>
                <p style={{color: "#000", margin: "0px", marginLeft: "25px"}}><b>Responsabilities:</b></p>
                <p style={{color: "#000", margin: "0px", marginLeft: "25px", marginRight: "25px"}}>{this.state.experienceResponsabilities}</p>
            </div>
        );
    }
}

export default WorkExperience;