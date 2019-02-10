import React, { Component } from 'react';

import Skill from './Skill';

class SkillsView extends Component {
    state = { 
        skills: [],
        generalSkills: [],
        technicalSkills: []
    }

    componentDidUpdate() {
        if ( this.props.skills.length !== 0 ) {
            if ( this.state.skills.length === 0 ) {
                this.setState({
                    skills: this.props.skills
                })
            }

            let general = []
            let technical = []
            for ( let i=0; i<this.state.skills.length; i++ ) {
                let value = this.state.skills[i]
                if ( value.type === "general") {
                    general.push(value)
                } else if ( value.type === "technical" ) {
                    technical.push(value)
                }
                if ( this.state.generalSkills.length === 0 && this.state.technicalSkills.length === 0 ) {
                    this.setState({
                        generalSkills: general,
                        technicalSkills: technical
                    })
                }
            }
        }
    }

    render() {
        console.log(this.state)
        return (
            <div style={{display: "flex", marginLeft: "25px"}}>
                <div>
                    <p>General Skills</p>
                    <div style={{paddingBottom: "5px"}}>
                        {
                            this.state.generalSkills.map(skill => {
                                return (
                                    <Skill skill={skill} imageSide="right" />
                                )
                            })
                        }
                    </div>
                </div>
                <div>
                    <p>Technical Skills</p>
                    <div style={{paddingBottom: "5px"}}>
                        {
                            this.state.technicalSkills.map(skill => {
                                return (
                                    <Skill skill={skill} imageSide="left" />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillsView;