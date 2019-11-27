import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const ThirdPage = () => (
  <Layout>
    <h1>Third Gatsby Page</h1>
    <p>
      This is the page I made with my own hands. Well, I copy/pasted page 2 and
      then I modified it to make it my own. Same, right?
    </p>
    <Link to="/">Run home, Jack!</Link>
  </Layout>
)

export default ThirdPage
