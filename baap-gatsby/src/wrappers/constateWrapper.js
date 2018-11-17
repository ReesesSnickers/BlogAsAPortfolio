import React, { Component } from 'react'
import { Container } from "constate";


const actions = {
    
};

const selectors = {
    
};

const effects = {

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