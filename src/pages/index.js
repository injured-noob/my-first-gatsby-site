import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hi everyone! This is my first try to build website using gatsby.</p>
      <StaticImage
        alt="A person trying to build websites."
        src="../images/icon.png"
      />
    </Layout>
  )
}

export default IndexPage
