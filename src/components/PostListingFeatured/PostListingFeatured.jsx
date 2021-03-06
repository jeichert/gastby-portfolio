import React, { Component } from 'react'
import Card from 'grommet/components/Card'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Anchor from 'grommet/components/Anchor'
import Animate from 'grommet/components/Animate'
// import LinkNext from 'grommet/components/icons/base/LinkNext'

import './PostListingFeatured.css'

class PostListingFeatured extends Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        category: postEdge.node.frontmatter.category,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        featured: postEdge.node.frontmatter.featured,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      })
    })
    return postList
  }
  render() {
    const postList = this.getPostList()
    return (
      <Tiles flush={false}>
        {/* Your post list here. */
        postList.map(
          (post, i) =>
            post.featured === true ? (
              <Animate
                className="tile"
                enter={{
                  animation: 'slide-up',
                  duration: 300,
                  delay: 900 + 100 * i
                }}
                keep
              >
                <Anchor href={post.path} style={{ textDecoration: 'none' }}>
                  <Tile key={post.title} fill>
                    <Card
                      thumbnail={post.cover}
                      heading={post.title}
                      label={post.category}
                      link={<Anchor href={post.path} />}
                      headingStrong
                      textSize="small"
                      // description={post.excerpt}
                    />
                  </Tile>
                </Anchor>
              </Animate>
            ) : null
        )}
      </Tiles>
    )
  }
}

export default PostListingFeatured
