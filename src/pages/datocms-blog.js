import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout";

const DatoCMS = () => {
    const data = useStaticQuery(graphql`
    query {
        allDatoCmsPost {
          edges {
            node {
              title
              slug
              description
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
                    data.allDatoCmsPost.edges.map((edge) => {
                        return (
                            <div>
                                <Link to={`/datocms-blog/${edge.node.slug}`}>
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

export default DatoCMS;