import React, { Component } from 'react';

import Intrest from './Intrest';

class IntrestsView extends Component {
    state = { 
        intrests: []
    }

    componentDidUpdate() {
        if ( this.state.intrests.length === 0 ) {
            if ( this.props.intrests.length !== 0 ) {
                this.setState({
                    intrests: this.props.intrests
                })
            }
        }
    }

    render() {
        return (
            <div style={{display: "flex", justifyContent: "space-between"}}>
                {
                    this.state.intrests.map(intrest => {
                        return (
                            <div style={{ width: "400px"}}>
                                <Intrest intrest={intrest}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default IntrestsView;