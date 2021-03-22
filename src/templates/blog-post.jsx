import React from "react"
import { graphql, Link } from "gatsby"
import { Contacts } from "../components/contacts";
import { Helmet } from "react-helmet"
import "../styles.scss"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <>
      <Helmet htmlAttributes={{lang: "fi"}}>
        <title>{post.frontmatter.title}</title>
        <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      </Helmet>
      <main>
        <div>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <Contacts/>
          <h2><Link to="/">Takaisin</Link></h2>
        </div>
      </main>
    </>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`