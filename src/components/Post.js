import React, { Component } from 'react'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postTitle: "",
            postBody: ""
        };
    }

    componentDidUpdate() {
        if ( this.props.posts !== undefined ) {
            if ( this.state.postTitle.length === 0 && this.state.postBody.length === 0 ) {
                this.setState({
                    postTitle: this.props.posts.title,
                    postBody: this.props.posts.body
                })
            }
        }
    }

    render() {
        return (
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToMkwu3ZNbQOEW26pWoXURqYWSeGAJx1EqzJBJg46eBqTg1WhD" alt={this.state.postTitle + " image"} />
                <p>{this.state.postTitle}</p>
                <p>{this.state.postBody}</p>
            </div>
        );
    }
}

export default Post;