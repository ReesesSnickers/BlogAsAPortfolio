import React from 'react'
import { Link } from 'gatsby'
import Axios from 'axios'

import PageWrapper from '../wrappers/pageWrapper.js'
import Home from '../components/home.js'

import '../css/prevbapp.css';


let Test = () => {
  Axios.get('localhost:1337/post')
  .then(function (response) {
    console.log(response);
  }).catch(function (error) {
    console.log(error);
  });
}

const IndexPage = ({ data }) => (
  <PageWrapper>
    <hero className="hero is-medium is-info has-bg-img home"><div></div></hero>
    {/* <h1 onClick={() => console.log(data)}>hi</h1>   */}
    <h1 onClick={() => Test()}>hi</h1>  
    {/* <Link to="/page-2/">Go to page 2</Link> */}
    <Home />
  </PageWrapper>
)
export default IndexPage

//example below of working model
export const pageQuery = graphql`
{
  allStrapiPost{
    edges {
      node {
        id
        title
        body
        basicPreview
        created
      }
    }
  }
}
`