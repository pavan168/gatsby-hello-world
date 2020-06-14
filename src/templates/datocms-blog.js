import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
query ($slug: String) {
  datoCmsPost(slug: {eq: $slug}) {
    title
    publishedDate(fromNow: true)
    description
    slug
  }
}
`;

const DatoCMSBlog = (props) => {

  return (
    <Layout>
      <h1>{props.data.datoCmsPost.title}</h1>
      <p>{props.data.datoCmsPost.publishedDate}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.datoCmsPost.description }}></div>
    </Layout>
  )
}

export default DatoCMSBlog