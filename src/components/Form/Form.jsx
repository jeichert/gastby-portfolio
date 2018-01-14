import React, { Component } from 'react'
import Form from 'grommet/components/Form'
import TextInput from 'grommet/components/TextInput'
import Header from 'grommet/components/Header'
import Heading from 'grommet/components/Heading'
import FormField from 'grommet/components/FormField'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'

class FormComponent extends Component {
  render() {
    return (
      <Form>
        <Header>
          <Heading>Contact Me</Heading>
        </Header>
        <FormField label="Name">
          <TextInput id="name" name="name" placeholder="Name" />
        </FormField>
        <FormField label="Email">
          <TextInput id="email" name="email" placeholder="Email" />
        </FormField>
        <FormField label="Message">
          <textarea id="message" name="message" placeholder="Message" />
        </FormField>
        <Footer pad={{ vertical: 'medium' }}>
          <Button label="Submit" type="submit" primary />
        </Footer>
      </Form>
    )
  }
}

export default FormComponent

{
  /* <form
            action="https://formspree.io/jeffrey.eichert@gmail.com"
            method="POST"
          >
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="_replyto" placeholder="Email" />
            <input type="submit" value="Send" />
          </form> */
}
