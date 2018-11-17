import React from 'react';
import { Component } from 'react';
import { Link } from 'gatsby';
// import Axios from 'axios';

import PageWrapper from '../wrappers/pageWrapper.js';
import Home from '../components/home.js';



class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // componentWillMount(){
  //   Axios.get('http://127.0.0.1:8080/postrecent')
  //   .then(response => {
  //     this.setState({blogs: response.data})
  //     console.log('index', this.state)
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }

  render(){
    return(
      <div>
      <PageWrapper>
        <div>Im HERE</div>
        <Home />
      </PageWrapper>
      </div>
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