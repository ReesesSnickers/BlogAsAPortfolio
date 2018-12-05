import React, { Component } from 'react';
import { Container } from "constate";
import Axios from 'axios';


const actions = {
    
};

const selectors = {
    
};

const effects = {
    test: () => ({ setState }) => {
        const test1 = () => setState(state => ({ count: state.count + 1 }));
        test1()
    },
    obtainAboutMe: () => ({ state, setState}) => {

        Axios.get('http://127.0.0.1:8080/about')
        .then(response => {
            console.log('CW', response.data[0].aboutMeIntro)
            const setAboutMe = () => setState(state =>({aboutMe: response.data[0].aboutMeIntro}))
            setAboutMe()
            console.log(state.aboutMe)
        }).catch(error => {
            console.log(error);
        })
    },
    // updateHomeBlog: () => ({ state, setState}) => {
    //     const setHomeBlog = () => setState(state =>({homeBlog: "Im a new one hahaha"}))
    //     setHomeBlog()
    //     console.log(state.homeBlog)
    // }
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