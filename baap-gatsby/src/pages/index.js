import React from 'react';
import { Component } from 'react';
import { Link } from 'gatsby';
import Axios from 'axios';

import PageWrapper from '../wrappers/pageWrapper.js';
import Home from '../components/home.js';

import '../css/prevbapp.css';


class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [{
        title: "pending",
        basicPreview: "pending"
      },{
        title: "pending",
        basicPreview: "pending"
      },{
        title: "pending",
        basicPreview: "pending"
      }]
    };
  }

  componentWillMount(){
    Axios.get('http://127.0.0.1:8080/postrecent')
    .then(response => {
      this.setState({blogs: response.data})
      console.log('index', this.state)
    }).catch(error => {
      console.log(error);
    })
  }

  render(){
    return(
      <PageWrapper>
        <hero className="hero is-medium is-info has-bg-img home"><div></div></hero>
        {/* <Link to="/page-2/">Go to page 2</Link> */}
        <Home blogs={[...this.state.blogs]}/>
      </PageWrapper>
    );
  }
}
export default IndexPage

//example below of working model
// export const pageQuery = graphql`
// {
//   allStrapiPost{
//     edges {
//       node {
//         id
//         title
//         body
//         basicPreview
//         created
//       }
//     }
//   }
// }
// `