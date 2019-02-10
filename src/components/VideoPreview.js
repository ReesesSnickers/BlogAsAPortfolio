import React, { Component } from 'react';

class VideoPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoTitle: "",
            videoSource: "",
            videoAbout: ""
        };
    }

    componentDidUpdate() {
        if ( this.props.videos !== undefined ) {
            if ( this.state.videoTitle.length === 0 && this.state.videoSource.length === 0 ) {
                this.setState({
                    videoTitle: this.props.videos.title,
                    videoSource: this.props.videos.source,
                    videoAbout: this.props.videos.about
                })
            }
        }
    }

    render() {
        console.log(this.props)
        return (
            <div style={{display: "flex"}}>
                <div style={{marginTop: "30px", marginLeft: "30px", marginRight: "30px"}}>
                    <iframe width="860" height="615" title={this.state.videoTitle} src={this.state.videoSource} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div>
                    <p style={{color: "#FFF", marginTop: "30px", marginRight: "30px", fontSize: "30px"}}>{this.state.videoTitle}</p>
                    <p style={{color: "#FFF"}}>{this.state.videoAbout}</p>
                </div>
            </div>
        );
    }
}

export default VideoPreview;