import React, { Component } from 'react'

import './Footer.css'
import config from '../../../data/SiteConfig'

class Footer extends Component {
  render() {
    const copyright = config.copyright
    if (!copyright) {
      return null
    }
    return (
      <footer className="footer">
        <div className="notice-container">
          <h4>{copyright}</h4>

          <h4>
            Based on{' '}
            <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
              Gatsby Advanced Starter
            </a>.
          </h4>
        </div>
      </footer>
    )
  }
}

export default Footer
