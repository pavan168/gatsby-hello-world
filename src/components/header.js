import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Header = (props) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title,
                    author
                }
            }
        }
    `);

    return <h1 style={{ display: 'inline' }}>{data.site.siteMetadata.title}</h1>
}

export default Header; 