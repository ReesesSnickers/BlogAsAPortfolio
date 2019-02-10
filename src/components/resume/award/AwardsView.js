import React, { Component } from 'react';

import Award from './Award';

class AwardsView extends Component {
    state = { 
        awards: []
     }

     componentDidUpdate() {
        if ( this.state.awards.length === 0 ) {
            if ( this.props.awards.length !== 0 ) {
                this.setState({
                    awards: this.props.awards
                })
            }
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.awards.map(award => {
                        return (
                            <Award award={award}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default AwardsView;