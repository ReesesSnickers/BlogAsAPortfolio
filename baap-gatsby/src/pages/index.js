import React from 'react';
import { Helmet } from "react-helmet"
import { Provider } from "constate";
import Favicon from '../favicon.png';
// import Axios from 'axios';

import Home from './home';

const initialState = {
  global: {
    count: 10,
    homeBlog: "i'm the homeblog",
    aboutMe: "Im the origional about me"
  }
};

// componentWillMount(){
  //   Axios.get('http://127.0.0.1:8080/postrecent')
  //   .then(response => {
  //     this.setState({blogs: response.data})
  //     console.log('index', this.state)
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }


const IndexPage = (props) => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>BlogASAPortfolio</title>
      <link rel="shortcut icon" type="image/png/ico" href={Favicon} />
      {/* <link rel="canonical" href="http://mysite.com/example" /> */}
    </Helmet>
    <Provider initialState={initialState} {...props} >
      <Home />
    </Provider>
  </div>
);

export default IndexPage




// NOTES

// componentWillMount(){
  //   Axios.get('http://127.0.0.1:8080/postrecent')
  //   .then(response => {
  //     this.setState({blogs: response.data})
  //     console.log('index', this.state)
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }

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