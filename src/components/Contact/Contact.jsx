import React, { Component } from 'react'
import Box from 'grommet/components/Box'
import Hero from 'grommet/components/Hero'
import Animate from 'grommet/components/Animate'
import Heading from 'grommet/components/Heading'
import Split from 'grommet/components/Split'
import Paragraph from 'grommet/components/Paragraph'
import Anchor from 'grommet/components/Anchor'

import Form from '../Form/Form'

import './Contact.css'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Hero size="small" backgroundColorIndex="light" fit="cover">
          <Box direction="row" justify="center" align="center">
            <Animate
              enter={{
                animation: 'slide-up',
                duration: 300,
                delay: 300
              }}
              keep
            >
              <Heading strong align="center" margin="none">
                Contact
              </Heading>
            </Animate>
          </Box>
        </Hero>
        <Split>
          <Box>
            <Animate
              enter={{
                animation: 'slide-up',
                duration: 300,
                delay: 600
              }}
              keep
            >
              <Heading align="start" tag="h3" strong margin="none">
                Location
              </Heading>
              <Paragraph align="start" margin="small">
                Brooklyn, NY
              </Paragraph>
              <Heading align="start" tag="h3" strong margin="none">
                Email
              </Heading>
              <Paragraph align="start" margin="small">
                <Anchor href="mailto:jeffrey.eichert@gmail.com">
                  jeffrey.eichert@gmail.com
                </Anchor>
              </Paragraph>
            </Animate>
            <Animate
              enter={{
                animation: 'slide-up',
                duration: 300,
                delay: 600
              }}
              keep
            >
              <Heading align="start" tag="h3" strong margin="none">
                Phone
              </Heading>
              <Paragraph align="start" margin="small">
                732-915-2389
              </Paragraph>
            </Animate>
          </Box>
          <Box>
            <Form />
          </Box>
        </Split>
      </div>
    )
  }
}

export default Contact
