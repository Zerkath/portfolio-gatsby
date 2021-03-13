import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Contacts from "../components/contacts"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <title>{post.frontmatter.title}</title>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <a href="/">takaisin</a><t> | </t>
        <Contacts/>
      </div>
    </Layout>
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