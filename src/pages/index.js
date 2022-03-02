import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Projects from "../components/projects"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"
import MiniProjects from "../components/OpenSource"

const IndexPage = () => (
  <Layout>
    <SEO title="Kamran Davar" />
    <Header></Header>
    <Projects></Projects>
    <MiniProjects />
    <About></About>
    <Skills></Skills>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
