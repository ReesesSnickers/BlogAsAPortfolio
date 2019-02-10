import React, { Component } from 'react';

class Skill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            skill: "",
            skillType: "",
            skillIcon: ""
        };
    }

    componentDidMount() {
        if ( this.props.skill !== undefined ) {
            if( this.state.skill === "" && this.state.skillIcon === "" ) {
                this.setState({
                    skill: this.props.skill.skill,
                    skillType: this.props.skill.type,
                    skillIcon: this.props.skill.icon.url
                })
            }
        }
    }

    render() {
        let image = <div><img style={{height: "150px", width: "150px"}} src={"http://localhost:1337" + this.state.skillIcon} alt={this.state.skill + " icon"} /></div>
        let imageLeft,
            imageRight
        if ( this.props.imageSide === "left" ) {
            imageLeft = image
        } else if ( this.props.imageSide === "right" ) {
            imageRight = image
        }

        return (
            <div style={{display: "flex"}}>
                {imageLeft}
                <p style={{color:"#000"}}>{this.state.skill}</p>
                {imageRight}
            </div>
        );
    }
}

export default Skill;