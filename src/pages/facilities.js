import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import About from '../components/about'
import FacilitiesMenu from '../components/facilities_menu'


const FacilitiesPage = () => (
  <Layout place="about">
    <About />
    <FacilitiesMenu />
    <div className="google-maps">
    </div>
  </Layout>
)

export default FacilitiesPage