import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, Link, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="page">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="content">
          {children}
        </div>
        <footer
          style={{
            marginBottom: `15px`,
            fontSize: `.75em`,
            textAlign: `center`,
          }}
        >
          <hr />
          <div>
            Ellis Hollow Community Center <strong>|</strong> 111 Genung Rd.  <strong>|</strong>  607-273-3739
          </div>
          <div style={{ marginTop: `3px` }}>
            © {new Date().getFullYear()}, built by{' '}
            <span>
              <a href="https://gatsbyjs.org" target="_blank">
                Gatsby
              </a>
            </span>
            , powered by{' '}
            <span>
              <a href="https://sanity.io" target="_blank">
                Sanity
              </a>
            </span>
          </div>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
