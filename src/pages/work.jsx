import React, { Component } from 'react'
import Helmet from 'react-helmet'
import PostListing from '../components/PostListing/PostListing'

import config from '../../data/SiteConfig'

class Work extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className="work">
        <Helmet title={`Work | ${config.siteTitle}`} />
        <PostListing postEdges={postEdges} />
      </div>
    )
  }
}

export default Work

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query WorkQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            category
            cover
            firm
            date
            featured
          }
        }
      }
    }
  }
`
