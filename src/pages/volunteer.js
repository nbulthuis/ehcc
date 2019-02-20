import React from 'react'
import Script from 'react-load-script'
import * as emailjs from 'emailjs-com'

import Layout from '../components/layout'
import ContactForm from '../components/contactForm'

class VolunteerPage extends React.Component {
  render() {
    return (
      <Layout>
        <div style={{margin: "-10px 0 5px 0"}}>
          <p style={{margin: 0}}>Thank you for you interest in volunteering!</p>
          <p style={{marginTop: 0}}>Fill out the form below and someone will contact you.</p>
        </div>
        <ContactForm pool={false}/>
      </Layout>
    );
  }
}

export default VolunteerPage