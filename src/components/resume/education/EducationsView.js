import React, { Component } from 'react';

import Education from './Education';

class EducationsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            educations: []
        };
    }

    componentDidUpdate() {
        if ( this.state.educations.length === 0 ) {
            if ( this.props.educations.length !== 0 ) {
                this.setState({
                    educations: this.props.educations
                })
            }
        }
    }

    render() {
        return (
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                {
                    this.state.educations.map(education => {
                        return (
                                <Education education={education}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default EducationsView;