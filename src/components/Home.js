import React, { Component } from 'react';

import PageWrapper from './PageWapper';
import PostPreview from './PostPreview';
import Card from './Card';
import Avatar from './Avatar';

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            user: [],
            photo: ""
        };
    }
    componentDidUpdate(){
        if ( this.props.user !== undefined ) {
            if ( this.state.user.length === 0 ) {
                this.setState({
                    user: this.props.user,
                    photo: this.props.user.photo.url
                })
            }
        }
    }

    render() {
        return (
            <PageWrapper>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{backgroundColor: "blue", width: "25vw", display: "flex", flexDirection: "column"}}>
                            <Avatar img={"http://localhost:1337" + this.state.photo} altText={this.state.user.fullName + " photo"} height="150px" width="150px" />
                        <p>{this.state.user.fullName}</p>
                    </div>
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <div style={{display: "flex",flexDirection: "row", justifyContent: "space-between", margin: "20px"}}>
                            <Card title="resume"/>
                            <Card title="videos"/>
                            <p style={{color: "white", flexGrow: "1"}}>Quotes</p>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", margin: "20px"}}>
                            <Card title="posts"/>
                            <PostPreview posts={this.props.posts[0]} />
                        </div>
                    </div>
                </div>
            </PageWrapper>
        );
    }
}

export default Home;