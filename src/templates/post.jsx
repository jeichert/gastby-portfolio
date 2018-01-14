import React, { Component } from 'react'

import Helmet from 'react-helmet'
import Hero from 'grommet/components/Hero'
import Carousel from 'grommet/components/Carousel'
import Columns from 'grommet/components/Columns'
import Value from 'grommet/components/Value'
import Image from 'grommet/components/Image'
import Box from 'grommet/components/Box'
import Headline from 'grommet/components/Headline'
import Paragraph from 'grommet/components/Paragraph'
import UserInfo from '../components/UserInfo/UserInfo'
// import Disqus from '../components/Disqus/Disqus'
// import LazyImage from '../components/LazyImage/LazyImage'
// import PostTags from '../components/PostTags/PostTags'
import SEO from '../components/SEO/SEO'
import config from '../../data/SiteConfig'
import './b16-tomorrow-dark.css'
import './post.css'

export default class PostTemplate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imagesLoaded: false,
      masonryOptions: {
        columWidth: 80,
        gutter: 10,
        itemSelector: '.grid-item'
      }
    }
    this.handleImagesLoaded = this.handleImagesLoaded.bind(this)
  }
  handleImagesLoaded() {
    this.setState({ imagesLoaded: true })
  }

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
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Headline align="center">{post.title}</Headline>
        <Box align="center" alignContent="center">
          <Paragraph align="center" size="medium">
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
          <Value responsive label="Type" value={post.category} size="small" />
        </Columns>
        {post.images !== null ? (
          <Carousel>{post.images.map(image => <Image src={image} />)}</Carousel>
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
        squareFootage
        tags
      }
      fields {
        slug
      }
    }
  }
`
