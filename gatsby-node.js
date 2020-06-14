const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {

    // need to generate a slug for markdown files
    if (node.internal.type === 'MarkdownRemark') {
        const { createNodeField } = actions;
        // const slug = path.basename(node.fileAbsolutePath, '.md') || 'blog';
        // console.log('@@@@@@@@@@@@@@@@MarkdownRemark', slug)

        createNodeField({
            node,
            name: 'slug',
            value: 'blog'
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // use for markdown files
    const blogTemplateMarkdown = path.resolve('./src/templates/blog.js');
    const responseMarkdown = await graphql(`
                    query {
                        allMarkdownRemark {
                            edges {
                                node {
                                    fields {
                                        slug
                                    }
                                }
                            }
                        }
                    }
    `)

    responseMarkdown.data.allMarkdownRemark.edges.map((edge) => {
        createPage({
            path: `/blog/${edge.node.fields.slug}`,
            component: blogTemplateMarkdown,
            context: {
                slug: edge.node.fields.slug
            }
        });
    })

    // use for contentful
    const blogTemplateContentful = path.resolve('./src/templates/contentful-blog.js');
    const responseContentful = await graphql(`
                    query {
                        allContentfulBlogPost {
                            edges {
                                node {
                                    slug
                                }
                            }
                        }
                    }
    `)

    responseContentful.data.allContentfulBlogPost.edges.map((edge) => {
        createPage({
            path: `/contentful-blog/${edge.node.slug}`,
            component: blogTemplateContentful,
            context: {
                slug: edge.node.slug
            }
        });
    })

    // use for DatoCMS
    const blogTemplateDatoCMS = path.resolve('./src/templates/datocms-blog.js');
    const responseDatoCMS = await graphql(`
                     query {
                        allDatoCmsPost {
                            edges {
                              node {
                                slug
                              }
                            }
                          }
                     }
     `)

    responseDatoCMS.data.allDatoCmsPost.edges.map((edge) => {
        createPage({
            path: `/datocms-blog/${edge.node.slug}`,
            component: blogTemplateDatoCMS,
            context: {
                slug: edge.node.slug
            }
        });
    })

}
