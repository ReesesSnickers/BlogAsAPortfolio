import React, { Component } from 'react';

import Publication from './Publication';

class PublicationsView extends Component {
    state = { 
        publications: []
    }

    componentDidUpdate() {
        if ( this.state.publications.length === 0 ) {
            if ( this.props.publications.length !== 0 ) {
                this.setState({
                    publications: this.props.publications
                })
            }
        }
    }

    render() {
        return (
            <div style={{paddingBottom: "5px", display: "flex", justifyContent: "space-around"}}>
                {
                    this.state.publications.map(publication => {
                        return (
                            <Publication publication={publication}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default PublicationsView;