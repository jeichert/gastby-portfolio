import React, { Component } from 'react'
import Header from 'grommet/components/Header'
import Animate from 'grommet/components/Animate'
import Box from 'grommet/components/Box'
import Logo from '../Logo/Logo'

import Navigation from '../Navigation/Navigation'
import './Header.css'

class PageHeader extends Component {
  render() {
    return (
      <Header pad="small">
        <Animate
          enter={{
            animation: 'slide-up',
            duration: 300,
            delay: 0
          }}
          keep
        >
          <Logo />
        </Animate>
        <Box flex justify="end" direction="row" style={{ overflow: 'hidden' }}>
          <Animate
            enter={{
              animation: 'slide-up',
              duration: 300,
              delay: 400
            }}
            keep
          >
            <Navigation />
          </Animate>
        </Box>
      </Header>
    )
  }
}

export default PageHeader
