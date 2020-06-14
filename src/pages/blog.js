import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

export default function Blog() {

  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              description
              title
              imageUrl
            }
            fields {
              slug
            }
            html
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <ol>
        {
          data.allMarkdownRemark.edges.map((edge, index) => {
            return (

              <li key={index}>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  {/* <Link to={''}> */}
                  <h2>{edge.node.frontmatter.title}</h2>
                </Link>
                <p>{edge.node.frontmatter.description}</p>
                <img
                  src={edge.node.frontmatter.imageUrl}
                  alt="Group of pandas eating bamboo"
                />
              </li>
            )
          })
        }
      </ol>
    </Layout>
  );
}