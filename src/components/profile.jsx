import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


export function ProfileImage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  `)
  return <Img className="profile-picture" fluid={data.file.childImageSharp.fluid} alt=""/>
}