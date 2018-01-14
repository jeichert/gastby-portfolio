import App from 'grommet/components/App'
import Section from 'grommet/components/Section'
import Article from 'grommet/components/Article'
import React, { Component } from 'react'
import 'grommet/grommet-hpe.min.css'

import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import config from '../../data/SiteConfig'
import './main.css'

export default class MainLayout extends Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : '/'
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, '')
      .replace('/', '')
    let title = ''
    if (currentPath === '') {
      title = 'Home'
    } else if (currentPath === 'tags/') {
      title = 'Tags'
    } else if (currentPath === 'categories/') {
      title = 'Categories'
    } else if (currentPath === 'about/') {
      title = 'About'
    } else if (currentPath.includes('posts')) {
      title = 'Article'
    } else if (currentPath.includes('tags/')) {
      const tag = currentPath
        .replace('tags/', '')
        .replace('/', '')
        .replace('-', ' ')
      title = `Tagged in ${capitalize(tag)}`
    } else if (currentPath.includes('categories/')) {
      const category = currentPath
        .replace('categories/', '')
        .replace('/', '')
        .replace('-', ' ')
      title = `${capitalize(category)}`
    }
    return title
  }
  render() {
    const { children } = this.props
    return (
      <App inline centered>
        <Header />

        <Article>
          <Section pad="medium">
            {children()}
            <Footer />
          </Section>
        </Article>
      </App>
    )
  }
}
