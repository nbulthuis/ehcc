import React from 'react'

import Layout from '../components/layout'
import ContactForm from '../components/contactForm'

class PoolRegistrationPage extends React.Component {
  render() {
    return (
      <Layout>
        <div style={{ margin: "-10px 0 5px 0" }}>
          <p style={{ margin: 0 }}>Thank you for you interest in volunteering!</p>
          <p style={{ marginTop: 0 }}>Fill out the form below and someone will contact you.</p>
        </div>
        <ContactForm pool={true} />
      </Layout>
    );
  }
}

export default PoolRegistrationPage