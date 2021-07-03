import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi, I am the creator of this site. Myself Shubham Patil pursuing B.tech in Chem Engg at IIT BOMBAY.
        I really love to learn new things. I also have so mush interest in Finance and world politics.  </p>
      <StaticImage
        alt="Photo of website creator"
        src="../images/world.jpg"
      />
      
    </Layout>
  )
}

export default AboutPage
