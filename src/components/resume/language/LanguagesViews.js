import React, { Component } from 'react';

import Language from './Language';

class LanguagesView extends Component {
    state = { 
        languages: [],
        computerLanguages: []
    }

    componentDidUpdate() {
        if ( this.props.computerLanguages.length !== 0 && this.props.languages.length !== 0 ) {
            if (this.state.computerLanguages.length === 0 && this.state.languages.length === 0 ){
                this.setState({
                    computerLanguages: this.props.computerLanguages,
                    languages: this.props.languages
                })
            }
        }
    }

    render() {
        return (
            <div>
                <div style={{display: "flex"}}>
                    {
                        this.state.languages.map(language => {
                            return (
                                <div style={{ width: "400px", display: "flex", flexWrap: "wrap"}}>
                                    <Language type="" language={language} />
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{display: "flex", display: "flex", flexWrap: "wrap"}}>
                    {
                        this.state.computerLanguages.map(language => {
                            return (
                                <div style={{ width: "400px"}}>
                                    <Language type="computer" language={language} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default LanguagesView;