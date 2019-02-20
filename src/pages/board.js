import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

import "./board.css"

const BoardPage = () => (
  <Layout place="about">
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Contact</th>
        </tr>
        <tr>
          <td>Christine Beacraft</td>
          <td>President & Fair Chair</td>
        </tr>
        <tr>
          <td>Christina Tenerowicz</td>
          <td>Secretary</td>
        </tr>
        <tr>
          <td>Jason Klaben</td>
          <td>Treasurer</td>
        </tr>
        <tr>
          <td>Sarah Christen</td>
          <td>Board member, EH Gazette Editor</td>
        </tr>
        <tr>
          <td>Owen Raymond</td>
          <td>Board member</td>
        </tr>
        <tr>
          <td>Nelson Burdick</td>
          <td>Boy Scouts representative</td>
        </tr>
      </table>
    </div>
  </Layout>
)

export default BoardPage