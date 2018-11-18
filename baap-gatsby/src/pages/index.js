import React from 'react';
import { Provider } from "constate";
// import Axios from 'axios';

import Home from './home';

const initialState = {
  global: {
    count: 10
  }
};


const IndexPage = (props) => (
  <div>
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