import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BBQ from '../assets/images/music-in-hollow.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`Ellis Hollow`, `Ellis Hollow Community Center`, `Ellis Hollow Nursery School`, `Ellis Hollow Pool`]} />
    <div style={{ margin: `0 auto`, padding: `10px 0` }}>
      <div style={{ width: "500px", margin: `0 auto` }}>
        <img src={BBQ} alt="ellis hollow" style={{ width: `320px`, height: `240px`, margin: `5px 5px 0 0`, float: `left` }}></img>
        <p style={{ textAlign: `justify` }}>Ellis Hollow is a community at the southeastern boundary of Ithaca, New York. Although small and in a rural setting, Ellis Hollow is rich in history and beautiful in setting. Over the years the people of Ellis Hollow have come together in the spirit of friendship to form a neighborhood committee which has built not only a Community Center - but a way of life for its residents. As we move from the 20th to the 21st Century, The Ellis Hollow Community Center and its Board will, within the next few years, celebrate a half Century of community involvement and support. This Website is dedicated to - not only the Founders of The Ellis Hollow Community Association - but also to those individuals both living and now gone, named and unnamed, who have kept the traditions and the memories alive for all the residents who live here...</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage