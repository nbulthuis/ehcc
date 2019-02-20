import PropTypes from 'prop-types'
import React from 'react'

import './about.css'

const About = ({ siteTitle }) => (
  <div style={{width: "100%"}} className="about-menu">
    <h6>Map & Directions</h6>
    <h6>History of Ellis Hollow</h6>
    <h6>Community Center Board</h6>
    <h6>Faciltiies Rental</h6>
  </div>
)

About.propTypes = {
  siteTitle: PropTypes.string,
}

About.defaultProps = {
  siteTitle: ``,
}

export default About
