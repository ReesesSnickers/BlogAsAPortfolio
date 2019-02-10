import React, { Component } from 'react';

import WorkExperience from './WorkExperience';

class WorkExperiencesView extends Component {
    state = { 
        experiences: []
    }

    componentDidUpdate () {
        if ( this.state.experiences.length === 0 ) {
            if ( this.props.experiences.length !== 0 ) {
                this.setState({
                    experiences: this.props.experiences
                })
            }
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.experiences.map(experience => {
                        return (
                            <WorkExperience experience={experience}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default WorkExperiencesView;