import React, { Component } from 'react'
import Menu from 'grommet/components/Menu'
import Box from 'grommet/components/Box'
import Anchor from 'grommet/components/Anchor'
// import Link from 'gatsby-link'

import './Navigation.css'
import config from '../../../data/SiteConfig'

class Navgation extends Component {
  getNavLinks() {
    const { navigationLinks } = config

    return navigationLinks.map(link => (
      <Anchor
        exact
        key={link.label}
        href={link.url}
        style={{ cursor: 'pointer' }}
        label={link.label}
      />
    ))
  }
  render() {
    return (
      <Box justify="center" align="end">
        <Menu
          className="menu"
          direction="row"
          label="Menu"
          responsive
          closeOnClick
          fill
        >
          {this.getNavLinks()}
        </Menu>
      </Box>
    )
  }
}

export default Navgation
