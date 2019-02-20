import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `Ellis Hollow`,
        `Ellis Hollow Community Center`,
        `Ellis Hollow Nursery School`,
        `Ellis Hollow Pool`,
      ]}
    />
    <div style={{ margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '30px' }}>Current News</h2>
      <div style={{ marginBottom: '30px' }}>
        <h3>Ellis Hollow Fair</h3>
        <p>Saturday, September 8</p>
        <p>12-5pm</p>
        <p>
          We need you! Click <Link to="/fair-volunteers">here</Link> to
          find out how.
        </p>
      </div>
      <div>
        <h3>Ellis Hollow Nursery School Now Enrolling</h3>
        <p>The school is now enrolling children ages 3-5 for September</p>
        <p>
          <a href="mailto: ellishollowns@gmail.com">Email</a> the school to schedule a visit
          today!
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage