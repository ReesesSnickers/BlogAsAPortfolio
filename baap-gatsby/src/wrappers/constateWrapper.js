import React, { Component } from 'react'
import { Container } from "constate";


const actions = {
    
};

const selectors = {
    
};

const effects = {
    test: () => ({ setState }) => {
        const test1 = () => setState(state => ({ count: state.count + 1 }));
        test1()
      }
};

export default class ConstateWrapper extends Component {
    render() {
        return (
        <div>
            <Container initialState={""} actions={actions} selectors={selectors} effects={effects} context="global" pure>
                {this.props.children}
            </Container>
        </div>
        );
    }
}