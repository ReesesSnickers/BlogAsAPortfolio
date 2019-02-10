import React, { Component } from 'react';
import Nav from './Nav';

class PageWrapper extends Component {
    render() {
      return (
        <div>
            <Nav />
            {this.props.children}
        </div>
      );
    }
}

export default PageWrapper;