import React, { Component } from 'react';

class Certificate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            certificateTitle: "",
            certificateIcon: "",
            certificateDuration: "",
            certificateCompleted: "",
        };
    }

    componentDidUpdate() {
        if ( this.props.certificate !== undefined ) {
            if ( this.state.certificateTitle.length === 0 ) {
                this.setState({
                    certificateTitle: this.props.certificate.title,
                    certificateIcon: this.props.certificate.icon.url,
                    certificateDuration: this.props.certificate.duration,
                    certificateCompleted: this.props.certificate.completed,
                })
            }
        }
    }

    render() {
        return (
            <div style={{display: "flex"}}>
                <div style={{marginLeft: "25px", marginRight: "25px"}}>
                    <img src ={"http://localhost:1337" + this.state.certificateIcon} alt={this.state.CertificateTitle + " provider icon"} style={{height: "120px", width: "250px"}} />
                </div>
                <div>
                    <p style={{color: "#000"}}><b>{this.state.certificateTitle}</b></p>
                    <div style={{display: "flex"}}>
                        <div style={{marginRight: "20px"}}>
                            <p style={{color: "#000", margin: "0px"}}><b>Duration:</b></p>
                            <p style={{color: "#000", margin: "0px"}}>{this.state.certificateDuration}</p>
                        </div>
                        <div>
                            <p style={{color: "#000", margin: "0px"}}><b>Completed:</b></p>
                            <p style={{color: "#000", margin: "0px"}}>{this.state.certificateCompleted}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Certificate;