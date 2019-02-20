import PropTypes from 'prop-types'
import React from 'react'

import './facilities_menu.css'

const FacilitiesMenu = () => (
  <div className="facilities-menu">
    <h6>Nature Trails</h6>
    <h6>Summer Camps</h6>
    <h6>Cross Country Skiing</h6>
    <h6>Nature Preserve</h6>
    <h6>Playground</h6>
    <h6>Athletic Facilities</h6>
  </div>
)

FacilitiesMenu.propTypes = {
  siteTitle: PropTypes.string,
}

FacilitiesMenu.defaultProps = {
  siteTitle: ``,
}

export default FacilitiesMenu