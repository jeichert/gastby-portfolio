import React, { Component } from 'react'

import Helmet from 'react-helmet'
import Zoom from 'react-thumbnail-zoom'
import Hero from 'grommet/components/Hero'
import Columns from 'grommet/components/Columns'
import Value from 'grommet/components/Value'
// import Image from 'grommet/components/Image'
import Box from 'grommet/components/Box'
import Animate from 'grommet/components/Animate'
import Headline from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import UserInfo from '../components/UserInfo/UserInfo'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './b16-tomorrow-dark.css'
import './post.css'

export default class PostTemplate extends Component {
  render() {
    const { slug } = this.props.pathContext
    const postNode = this.props.data.markdownRemark
    const post = postNode.frontmatter

    if (!post.id) {
      post.id = slug
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID
    }

    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <Hero size="large">
          <SEO postPath={slug} postNode={postNode} postSEO />
          <Animate
            enter={{
              animation: 'slide-up',
              duration: 300
            }}
          >
            <Headline strong align="center">
              {post.title}
            </Headline>
          </Animate>
          <Animate
            enter={{
              animation: 'slide-up',
              duration: 300
            }}
          >
            <Box align="center" alignContent="center">
              <Paragraph align="center" size="large">
                {post.description}
              </Paragraph>
            </Box>
            <Columns justify="center" maxCount={3} size="small">
              <Value responsive label="Date" value={post.date} size="small" />
              <Value
                label="Size"
                size="small"
                responsive
                value={post.squareFootage}
                units="SF"
              />
              <Value
                responsive
                label="Type"
                value={post.category}
                size="small"
              />
            </Columns>
            <Columns justify="center" maxCount={3} size="small">
              <Value
                responsive
                label="Status"
                value={post.status}
                size="small"
              />
              <Value responsive label="Firm" value={post.firm} size="small" />
            </Columns>
          </Animate>
        </Hero>
        {post.images !== null ? (
          <Animate
            enter={{
              animation: 'slide-up',
              duration: 300,
              delay: 600
            }}
          >
            {/* <Carousel size="small"> */}
            {post.images.map((image, i) => (
              <Box margin="small">
                <Zoom>
                  <img key={i} src={image} />
                </Zoom>
              </Box>
            ))}
            {/* </Carousel> */}
          </Animate>
        ) : null}
        <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
        {/* <div className="post-meta">
              <PostTags tags={post.tags} />
            </div> */}
        <UserInfo config={config} />
      </div>
    )
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        images
        date
        description
        category
        status
        squareFootage
        tags
        firm
      }
      fields {
        slug
      }
    }
  }
`
