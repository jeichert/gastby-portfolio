import React, { Component } from 'react'
import Split from 'grommet/components/Split'
import Heading from 'grommet/components/Heading'
import Paragraph from 'grommet/components/Paragraph'
import Box from 'grommet/components/Box'
import Image from 'grommet/components/Image'

import './About.css'
import data from '../../../data/about'

class About extends Component {
  render() {
    return (
      <div className="about">
        <Split
          showOnResponsive="both"
          style={{ width: '100%', height: '100%' }}
          fixed
        >
          <Box justify="start" pad="small" align="start">
            <Box justify="center" align="center">
              <Image
                align
                style={{ width: '325px', height: '325px' }}
                src="headshot.jpg"
              />
            </Box>
            <br />
            <Heading align="start" tag="h3" strong margin="none">
              About
            </Heading>
            <Paragraph align="start" margin="small">
              {data.description}
            </Paragraph>

            <Heading align="start" tag="h3" strong margin>
              Position
            </Heading>

            <Heading align="start" tag="h4" strong>
              {data.currentPosition}
            </Heading>

            <Heading align="start" tag="h4" strong margin="none">
              Email
            </Heading>
            <Paragraph align="start" margin="small">
              {data.email}
            </Paragraph>

            <Heading tag="h3" strong margin="small">
              Education
            </Heading>
            {data.schools.map(school => (
              <div>
                <Heading tag="h4" strong margin="small">
                  {school.name}
                </Heading>
                <Paragraph margin="small">
                  {school.degree} - {school.dates}
                </Paragraph>
                <Paragraph margin="small">{school.location}</Paragraph>
              </div>
            ))}
          </Box>
          <Box colorIndex="" justify="start" align="start" pad="small">
            <Heading tag="h3" strong margin="small">
              Experience
            </Heading>
            {data.jobs.map(job => (
              <div>
                <Heading tag="h4" strong>
                  {job.position} - {job.name}
                </Heading>
                <Paragraph>{job.dates}</Paragraph>
                <Paragraph>{job.description}</Paragraph>
              </div>
            ))}
          </Box>
        </Split>
      </div>
    )
  }
}

export default About
