import React, { Component } from 'react';

class Award extends Component {
    constructor(props) {
        super(props);
        this.state = {
            awardName: "",
            awardReason: "",
            awardRecieved: "",
            awardIcon: "",
        };
    }

    componentDidMount() {
        if ( this.props.award !== undefined ) {
            if ( this.state.awardName === "" ) {
                this.setState({
                    awardName: this.props.award.Name,
                    awardReason: this.props.award.presentedFor,
                    awardRecieved: this.props.award.recieved.split('-')[0],
                    awardIcon: this.props.award.icon.url,
                })
            }
        }
    }

    render() {
        return (
            <div style={{display: "flex", marginBottom: "25px"}}>
                <div style={{marginLeft: "25px", marginRight: "25px"}}>
                    <img src ={"http://localhost:1337" + this.state.awardIcon} alt={this.state.awardName + " provider icon"} style={{height: "150px", width: "150px"}} />
                </div>
                <div>
                    <p style={{color: "#000"}}><b>{this.state.awardName}</b></p>
                    <div>
                        <p style={{color: "#000", margin: "0px"}}><b>Recieved:</b></p>
                        <p style={{color: "#000", margin: "0px"}}>{this.state.awardRecieved}</p>
                    </div>
                    <div>
                        <p style={{color: "#000", margin: "0px"}}><b>Presented for:</b></p>
                        <p style={{color: "#000", margin: "0px"}}>{this.state.awardReason}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Award;