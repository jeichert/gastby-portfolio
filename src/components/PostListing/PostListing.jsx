import React, { Component } from 'react'
import Card from 'grommet/components/Card'
import Tiles from 'grommet/components/Tiles'
import Tile from 'grommet/components/Tile'
import Anchor from 'grommet/components/Anchor'
import Animate from 'grommet/components/Animate'
import Label from 'grommet/components/Label'

class PostListing extends Component {
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
        postList.map((post, i) => (
          <Animate
            enter={{ animation: 'slide-up', duration: 300, delay: 100 * i }}
            keep
            style={{ width: '33%' }}
          >
            <Anchor
              className="tile"
              style={{ textDecoration: 'none' }}
              href={post.path}
              key={post.title}
            >
              <Tile key={post.title} fill>
                <Card
                  contentPad="small"
                  label={post.category}
                  thumbnail={post.cover}
                  link={<Anchor href={post.path} />}
                  headingStrong
                  textSize="small"
                  heading={post.title}
                  // description={post.excerpt}
                />
              </Tile>
            </Anchor>
          </Animate>
        ))}
      </Tiles>
    )
  }
}

export default PostListing
