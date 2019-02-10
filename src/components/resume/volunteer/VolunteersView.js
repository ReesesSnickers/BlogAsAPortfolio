import React, { Component } from 'react';

import Volunteer from './Volunteer';

class VolunteersView extends Component {
    state = { 
        volunteers: []
    }

    componentDidUpdate() {
        if ( this.state.volunteers.length === 0 ) {
            if ( this.props.volunteers.length !== 0 ) {
                this.setState({
                    volunteers: this.props.volunteers
                })
            }
        }
    }

    render() {
        return (
            <div style={{paddingBottom: "5px"}}>
                {
                    this.state.volunteers.map(volunteer => {
                        return (
                            <Volunteer volunteer={volunteer}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default VolunteersView;