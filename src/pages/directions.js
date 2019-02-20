import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import './directions.css'

const MAP_URL = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ1xqxhih_2okRmZa2ubH3RZA&key=${process.env.GATSBY_GOOGLE_API_KEY}`

const DirectionsPage = () => (
  <Layout place="about">
    <SEO
      title="Directions"
      keywords={[
        `Ellis Hollow`,
        `Ellis Hollow Community Center`,
        `Ellis Hollow Nursery School`,
        `Ellis Hollow Pool`,
      ]}
    />
    {/* <About place="direction" /> */}
    <div className="google-maps">
      <iframe
        width="80%"
        height="450"
        frameborder="0"
        src={MAP_URL}
        allowfullscreen
      />
      <div className="directions">
        <h5>From 13 and 366</h5>
        <p>Take Route 366 west to Turkey Hill Road, turn left on Turkey Hill and then left at Ellis Hollow Creek Road, turn right onto Genung Road, take Genung for 1/4 mile and the Community Center is on your left</p>
        <h5>From East Hill Plaza</h5>
        <p>Take Ellis Hollow Road to Genung, turn left on Genung Rd., and the Community Center will be on your right</p>
      </div>
    </div>
  </Layout>
)

export default DirectionsPage