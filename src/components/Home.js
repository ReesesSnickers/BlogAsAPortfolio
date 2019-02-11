import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
  } from 'react-router-dom';

  import PageWrapper from './PageWapper';
  import PostPreview from './PostPreview';
  import Card from './Card';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: ""
        };
    }

    componentDidUpdate() {
        if ( this.props.posts !== undefined) {
            if ( this.state.posts === "" ) {
                this.setState({
                    posts: this.props.posts
                })
            }
        }
    }

    render() {
        return (
            <Router>
                <PageWrapper>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <div style={{backgroundColor: "blue", width: "25vw", display: "flex", flexDirection: "column", justifyContent: "center"}}>
                            Test
                        </div>
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <div style={{display: "flex",flexDirection: "row", justifyContent: "space-between", margin: "20px"}}>
                                <Card title="resume"/>
                                <Card title="videos"/>
                                <p style={{color: "white", flexGrow: "1"}}>Quotes</p>
                            </div>
                            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "20px"}}>
                                <Card title="posts"/>
                                <PostPreview posts={this.state.posts[0]} />
                            </div>
                        </div>
                    </div>
                </PageWrapper>
            </Router>
        );
    }
}

export default Home;