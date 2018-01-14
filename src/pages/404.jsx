import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'

class ErrorPage extends Component {
  render() {
    return (
      <div className="error-container">
        <Helmet title={` 404 | ${config.siteTitle}`} />
        ERROR 404
      </div>
    )
  }
}

export default ErrorPage
