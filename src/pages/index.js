import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome">
      <p>Hi everyone! This is my first try to build website using gatsby.</p>
      <StaticImage
        alt=""
        src="../images/icon.png"
      />
    </Layout>
  )
}

export default IndexPage
