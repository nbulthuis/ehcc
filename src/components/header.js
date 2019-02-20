import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import logo from '../assets/images/ellis_wide.gif'
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className="header-logo">
      <div className="header-logo-minor-links">
        <h4>
          <Link to="/give">Give</Link>
        </h4>
        <h4>
          <Link to="/contact">Contact Us</Link>
        </h4>
      </div>
      <div className="header-logo-image-container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <h4 className="header-logo-tagline">
        <span className="header-logo-tagline-left">A Unique Community</span>
        <span className="header-logo-tagline-right">near Ithaca, NY</span>
      </h4>
    </div>
    <div className="header-main">
      <div className="dropdown about-dropdown">
        <h3 className="">About</h3>
        <div className="dropdown-content about-dropdown-content">
          <h5>
            <Link to="/directions">Directions & Map</Link>
          </h5>
          <h5>
            <Link to="/history">History of Ellis Hollow</Link>
          </h5>
          <h5>
            <Link to="/board">Community Center Board</Link>
          </h5>
          <h5>
            <Link to="/gazette">Gazette Archive</Link>
          </h5>
          <h5>
            <Link to="/rental">Facilities Rental</Link>
          </h5>
        </div>
      </div>
      <div className="dropdown programs-dropdown">
        <h3>Programs</h3>
        <div className="dropdown-content programs-dropdown-content">
          <h5>
            <Link to="/pool">Ellis Hollow Pool</Link>
          </h5>
          <h5>
            <a href="http://www.ellishollownurseryschool.com/" target="_blank">Nursery School</a>
          </h5>
        </div>
      </div>
      <div className="dropdown activities-dropdown">
        <h3>Activities</h3>
        <div className="dropdown-content activities-dropdown-content">
          <h5>
            <Link to="/scouts">Boy Scouts</Link>
          </h5>
          <h5>
            <Link to="/camps">Camps</Link>
          </h5>
          <h5>
            <Link to="/facilities">Athletic Facilities</Link>
          </h5>
        </div>
      </div>
      <div className="dropdown events-dropdown">
        <h3>Events</h3>
        <div className="dropdown-content events-dropdown-content">
          <h5>
            <Link to="/fair">Ellis Hollow Fair</Link>
          </h5>
          <h5>
            <Link to="/music">Music in the Hollow</Link>
          </h5>
          <h5>
            <Link to="/calendar">Events Calendar</Link>
          </h5>
        </div>
      </div>
      <div className="dropdown events-dropdown">
        <h3>Get Involved</h3>
        <div className="dropdown-content events-dropdown-content">
          <h5>
            <Link to="/listserve">Stay Informed</Link>
          </h5>
          <h5>
            <Link to="/volunteer">Volunteer</Link>
          </h5>
          <h5>
            <Link to="/membership">Become a Member</Link>
          </h5>
          <h5>
            <Link to="/give">Donate</Link>
          </h5>
        </div>
      </div>
    </div>
    <hr style={{ width: `100%`, margin: `0 auto` }} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
