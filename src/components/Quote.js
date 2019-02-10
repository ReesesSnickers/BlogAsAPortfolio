import React, { Component } from 'react';

class Quote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: []
        };
    }

    ////BROKKKKKKKKKEEEEEE AS !

    componentDidUpdate(){
        let quotes = this.props.quotes
        let i = 0
        setInterval(() => {
            const currentQuote = quotes[i]
            this.setState({
                quote: currentQuote
            })
            i++
            if ( i > quotes.length ) {
                i = 0
            }
        }, 5000)
        console.log(this.state.currentQuote)
    }

    render() {
        return (
            <div  style={{color: "white", height: "200px", width: "300px", fontSize: "30px"}}>
                {/* <p>{ this.props.quotes[this.state.choice].details }</p>
                <p>{ this.props.quotes[this.state.choice].author }</p> */}
            </div>
        );
    }
}

export default Quote;