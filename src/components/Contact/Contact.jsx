import React, { Component } from 'react'
import Form from '../Form/Form'
import WorldMap from 'grommet/components/WorldMap'
import Box from 'grommet/components/Box'

import './Contact.css'

const Places = [
  {
    place: [40.696011, -73.993286],
    label: 'Brooklyn',
    colorIndex: 'ok',
    id: 'brooklyn',
    flag: (
      <Box pad="small" colorIndex="accent-1">
        Brooklyn
      </Box>
    ),
    onClick: () => {
      // alert('Brooklyn')
    },
    onHover: () => {
      // console.log('Brooklyn', b)
    }
  }
]

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <Box direction="column">
          <WorldMap colorIndex="grey-1" series={Places} />
        </Box>
        <Box>
          <Form />
        </Box>
      </div>
    )
  }
}

export default Contact
