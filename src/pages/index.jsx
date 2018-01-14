import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Hero from 'grommet/components/Hero'
import Animate from 'grommet/components/Animate'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import PostListingFeatured from '../components/PostListingFeatured/PostListingFeatured'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'

class Index extends Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Hero backgroundColorIndex="light" fit="cover">
          <Box direction="row" justify="center" align="center">
            <Box basis="1/2" align="center" pad="medium">
              <Animate
                enter={{
                  animation: 'slide-up',
                  duration: 300,
                  delay: 600
                }}
                keep
              >
                <Heading strong align="center" margin="none">
                  Jeffrey Eichert
                </Heading>
              </Animate>
              <Animate
                enter={{
                  animation: 'slide-up',
                  duration: 300,
                  delay: 900
                }}
                keep
              >
                <Heading align="center" margin="none">
                  Architectural Designer
                </Heading>
              </Animate>
            </Box>
          </Box>
        </Hero>
        <PostListingFeatured postEdges={postEdges} />
      </div>
    )
  }
}

export default Index

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
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
            category
            tags
            cover
            date
            featured
          }
        }
      }
    }
  }
`
