import React, { Component } from 'react'


class PostPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postTitle: "",
            postPreview: "",
            postURL: ""
        };
    }

    componentWillReceiveProps() {
        console.log('hmm')
        console.log(this.props.posts !== undefined)
        if ( this.props.posts !== undefined ) {
            if ( this.state.postTitle.length === 0 && this.state.postPreview.length === 0 ) {
                this.setState({
                    postTitle: this.props.posts.title,
                    postPreview: this.props.posts.preview,
                    postURL: this.props.posts.photo.url
                })
            }
        }
    }

    render() {
        return (
            <div style={{width: "500px", height: "300px", backgroundColor: "red", display: "flex"}}>
                <div>
                    <div style={{display: "flex"}}>
                        <div style={{paddingLeft: "20px", paddingTop: "20px", width: "200px"}}>
                            <img src={"http://localhost:1337" + this.state.postURL} alt={this.state.postTitle + " image"} style={{height: "200px", width: "200px"}} />
                        </div>
                        <div style={{width: "280px"}}>
                            <p style={{fontSize: "20px", textAlign: "center", color: "#FFF", marginRight: "20px", paddingLeft: "20px"}}>{this.state.postTitle}</p>
                            <p style={{color: "#FFF", marginRight: "20px", paddingLeft: "20px", maxHeight: "2220px", marginBottom: "20px"}}>{this.state.postPreview}</p>
                        </div>
                    </div>
                    <div style={{display: "flex"}}>
                        <p style={{marginLeft: "30px", color: "#FFF", marginTop: "20px", marginBottom: "20px", height: "30px", width: "200px"}}>Views</p>
                        <div style={{paddingLeft: "50px"}}>
                            <button style={{color: "#FFF", border: "none", marginTop: "20px", marginBottom: "20px", height: "30px", width: "200px", background: "linear-gradient(#001F54, #000)"}} onClick={() => alert('clicked the view article button')}>Read this Article</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostPreview;