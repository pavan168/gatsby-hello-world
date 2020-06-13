import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
query($slug: String!)  {
  contentfulBlogPost(slug: {eq: $slug}) {
    publishedDate(fromNow: false)
    title
    body {
      json
    }
  }
} 
`;

const ContentfulBlog = (props) => {
  const options = {
    renderNode: {
      "embedded-asset-block": (node) => {
        const alt = node.data.target.fields.title['en-US']
        const url = node.data.target.fields.file['en-US'].url
        return <img alt={alt} src={url} />
      }
    }
  }

  return (
    <Layout>
      {/* <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div> */}
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
    </Layout>
  )
}

export default ContentfulBlog