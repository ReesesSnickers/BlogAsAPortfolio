import React, { Component } from 'react';

import Certificate from './Certificate';

class CertificatesView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            certificates: []
        };
    }

    componentDidUpdate() {
        if ( this.state.certificates.length === 0 ) {
            if ( this.props.certificates.length !== 0 ) {
                this.setState({
                    certificates: this.props.certificates
                })
            }
        }
    }

    render() {
        return (
            <div style={{display: "flex", flexWrap: "wrap"}}>
                {
                    this.state.certificates.map(certificate => {
                        return (
                            <div style={{width: "50%"}}>
                                <Certificate certificate={certificate}/>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default CertificatesView;