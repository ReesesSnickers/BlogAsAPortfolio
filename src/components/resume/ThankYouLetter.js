import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

import './resume.css';

import PageWrapper from '../PageWapper';

function todaysDate(that) {
    if ( that.state.date === "" ) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
    
        if (dd < 10) {
        dd = '0' + dd;
        }
    
        if (mm < 10) {
        mm = '0' + mm;
        }
    
        today = mm + '/' + dd + '/' + yyyy;
        that.setState({
            date: today
        })
    }
}

class ThankYouLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "",
            initialThanks: "",
            bringToCompany: "",
            finalThanks: "",
            name: "",
            email: ""
        };
    }

    componentDidUpdate() {
        if ( this.props.user !== undefined ) {
            if ( this.state.name === "" ) {
                this.setState({
                    initialThanks: this.props.user.viewThanks,
                    bringToCompany: this.props.user.bringToCompany,
                    finalThanks: this.props.user.thanksFinal,
                    name: this.props.user.fullName,
                    email: this.props.user.email
                })
            }
        }
    }

    render() {
        let buttonText = ">> Resume"
        return (
            <PageWrapper>
                <div>
                    <div style={{backgroundColor: "#F8F8FF", width: "90vw", marginLeft: "5%", marginTop: "25px", height: "90vh"}}>
                        <div style={{marginLeft: "25px"}}>
                            <p style={{color: "#000", textAlign: "right", margin: "0px", marginBottom: "60px", marginRight: "25px", fontSize: "30px", paddingTop: "25px"}} onLoad={todaysDate(this)}>{this.state.date}</p>
                            <p style={{color: "#000", fontSize: "30px", margin: "0px", marginBottom: "40px"}}>To Whom may be viewing,</p>
                            <p style={{color: "#000", margin: "0px", marginRight: "25px", fontSize: "30px", marginBottom: "20px"}}>{this.state.initialThanks}</p>
                            <p style={{color: "#000", margin: "0px", marginRight: "25px", fontSize: "30px", marginBottom: "20px"}}>{this.state.bringToCompany}</p>
                            <p style={{color: "#000", margin: "0px", marginRight: "25px", fontSize: "30px", marginBottom: "40px"}}>{this.state.finalThanks}</p>
                            <p style={{color: "#000", margin: "0px", marginRight: "25px", fontSize: "30px", marginBottom: "40px"}}>Sincerly,</p>
                            <p style={{color: "#000", margin: "0px", marginRight: "25px", fontSize: "30px"}}>{this.state.name}</p>
                        </div>
                    </div>
                    <Link to="/resume" className="link__resume" style={{textAlign: "right"}}>{buttonText}</Link>
                </div>
            </PageWrapper>
        );
    }
}

export default ThankYouLetter;