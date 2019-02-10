import React, { Component } from 'react';

class Publication extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicationURL: "",
            volunteerDepublicationIcontails: ""
        };
    }

    componentDidMount() {
        if ( this.props.publication !== undefined ) {
            if ( this.state.publicationURL === "" ) {
                this.setState({
                    publicationURL: this.props.publication.url,
                    publicationIcon: this.props.publication.icon.url
                })
            }
        }
    }

    render() {
        return (
            <div>
                <a href={this.state.publicationURL} target="_blank">
                    <img style={{height: "150px", width: "150px"}} src={"http://localhost:1337" + this.state.publicationIcon} alt={this.state.publicationURL} />
                </a>
            </div>
        );
    }
}

export default Publication;