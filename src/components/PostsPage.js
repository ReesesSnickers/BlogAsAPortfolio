import React, { Component } from 'react';

import PageWrapper from './PageWapper';

class PostsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    render() {
        
        return (
            <PageWrapper>
                <div style={{backgroundColor: "black"}}>
                    {
                        this.props.posts.map((post, index) => {
                            let float,
                                frontImage,
                                backImage,
                                containerPaddingDirection,
                                imagePaddingDirection

                            index % 2 === 0 ? imagePaddingDirection = "paddingRight" : imagePaddingDirection = "paddingLeft"

                            const image = <div style={{[imagePaddingDirection]: "30px"}}><img src={"http://localhost:1337" + post.photo.url} alt={post.title + " image"} style={{borderRadius: "50%", height: "175px", width: "175px"}}/></div>

                            index % 2 === 0 ? float = "left" : float = "right"
                            index % 2 === 0 ? frontImage = image : backImage = image
                            index % 2 === 0 ? containerPaddingDirection = "paddingLeft" : containerPaddingDirection = "marginRight"
                            

                            return (
                                <div style={{display: 'flex', float: float, paddingBottom: "45px", paddingTop: "15px", [containerPaddingDirection]: "30px"}} onClick={() => alert("clicked " + post.title)}>
                                    {frontImage}
                                    <div style={{height: "175px", width: "700px", background: "linear-gradient(#0099CC, #004D66)"}}>
                                        <p style={{color: "#FFF", fontSize: "30px", marginTop: "10px", marginBottom: "5px", paddingLeft: "10px", marginRight: "10px", textAlign: "center"}} >{post.title}</p>
                                        <p style={{color: "#FFF", paddingLeft: "10px", marginRight: "10px", marginBottom: "10px"}}>{post.preview}</p>
                                    </div>
                                    {backImage}
                                </div>
                            )
                        })
                    }
                </div>
            </PageWrapper>
        );
    }
}

export default PostsPage;