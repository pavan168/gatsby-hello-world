import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Header from "./header"
import Footer from "./footer"

const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default function Layout({ children }) {

    return (
        <div
            css={css`
          margin: 0 auto;
          max-width: 800px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
        >
            <header style={{ marginBottom: `1.5rem` }}>
                <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                    <Header />
                </Link>
                <ul style={{ listStyle: `none`, float: `right` }}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/blog/">Blog</ListLink>
                    <ListLink to="/contentful-blog/">Contentful Blog</ListLink>
                    <ListLink to="/datocms-blog/">DatoCMS Blog</ListLink>
                    <ListLink to="/product-page/">Commercelayer</ListLink>
                    <ListLink to="/about-css-modules/">CSS Modules</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>

            </header>
            {children}
            <Footer />
        </div>
    )
}