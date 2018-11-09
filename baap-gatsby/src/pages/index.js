import React from 'react'
import { Link } from 'gatsby'

import PageWrapper from '../wrappers/pageWrapper.js'
import Home from '../components/home.js'

import '../css/prevbapp.css';

const IndexPage = ({ data }) => (
  <PageWrapper>
    <hero class="hero is-medium is-info has-bg-img home"><div></div></hero>
    {/* <h1 onClick={() => console.log(data)}>hi</h1>   */}
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
      }
    }
  }
}
`