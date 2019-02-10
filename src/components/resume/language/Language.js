import React, { Component } from 'react';

class Language extends Component {
    constructor(props) {
        super(props);
        this.state = {
            languageName: "",
            languageComfort: "",
            languageIcon: ""
        };
    }

    componentDidMount() {
        if ( this.props.language !== undefined ) {
            if( this.state.languageName === "" ) {
                this.setState({
                    languageName: this.props.language.name,
                    languageComfort: this.props.language.comfortability,
                })
                if ( this.props.language.icon !== undefined ) {
                    this.setState({
                        languageIcon:this.props.language.icon.url
                    })
                }
            }
        }
    }

    render() {
        let image
        if (this.props.type === "computer") {
            image = <img style={{height: "150px", width: "150px"}} src={"http://localhost:1337" + this.state.languageIcon} alt={this.state.languageName + " icon"}/>
        } else {
            image = <div />
        }

        return (
            <div style={{textAlign: "center", width: "300px"}}>
                {image}
                <p style={{color: "#000"}}>{this.state.languageName}</p>
                <p style={{color: "#000"}}>{this.state.languageComfort}</p>
            </div>
        );
    }
}

export default Language;