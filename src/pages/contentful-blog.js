import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout";

const Contentful = () => {
    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost(sort: {fields: publishedDate, order: ASC}) {
          edges {
            node {
              slug
              title
              publishedDate(fromNow: true)
            }
          }
        }
      }
      
    `);

    return (
        <Layout>
            <ol>
                {
                    data.allContentfulBlogPost.edges.map((edge) => {
                        return (
                            <div>
                                <Link to={`/contentful-blog/${edge.node.slug}`}>
                                    <li>{edge.node.title}</li>
                                </Link>
                                <p>{`Published on ${edge.node.publishedDate}`}</p>
                            </div>
                        )
                    })
                }
            </ol>
        </Layout>
    );
}

export default Contentful;