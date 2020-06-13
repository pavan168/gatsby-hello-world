const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    if (node.internal.type === 'MarkdownRemark') {
        const { createNodeField } = actions;
        const slug = path.basename(node.fileAbsolutePath, '.md');

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // use for markdown
    // const blogTemplate = path.resolve('./src/templates/blog.js');
    // const response = await graphql(`
    //                 query {
    //                     allMarkdownRemark {
    //                         edges {
    //                             node {
    //                                 fields {
    //                                     slug
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    // `)

    // response.data.allMarkdownRemark.edges.map((edge) => {
    //     createPage({
    //         path: `/blog/${edge.node.fields.slug}`,
    //         component: blogTemplate,
    //         context: {
    //             slug: edge.node.fields.slug
    //         }
    //     });
    // })

    // use for contentful
    const blogTemplate = path.resolve('./src/templates/contentful-blog.js');
    const response = await graphql(`
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

    response.data.allContentfulBlogPost.edges.map((edge) => {
        // createPage({
        //     path: `/blog/${edge.node.slug}`,
        //     component: blogTemplate,
        //     context: {
        //         slug: edge.node.slug
        //     }
        // });
        createPage({
            path: `/contentful-blog/${edge.node.slug}`,
            component: blogTemplate,
            context: {
                slug: edge.node.slug
            }
        });
    })

}
