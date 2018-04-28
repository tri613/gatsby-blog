/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const kebabCase = require(`lodash/kebabCase`);
const moment = require(`moment`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const createPaginatedPages = require(`gatsby-paginate`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    createNodeField({
      node,
      name: `path`,
      value: `/post/${moment(node.frontmatter.date).format(`YYYY-MM-DD`)}-${kebabCase(node.frontmatter.title)}/`,
    });
  }
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const blogPostTemplate = path.resolve(`src/templates/blogTemplate.js`);
  const tagTemplate = path.resolve(`src/templates/tagTemplate.js`);
  const archivesTemplate = path.resolve(`src/templates/archivesTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString:"YYYY/MM")
            }
            fields {
              path
            }
          }
        }
        group(field: frontmatter___tags) {
          totalCount
          fieldValue
          field
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.path,
        component: blogPostTemplate,
        context: {
          title: node.frontmatter.title
        }, // additional data can be passed via context
      });
    });

    result.data.allMarkdownRemark.group.forEach(row => {
      createPage({
        path: `tags/${row.fieldValue}`,
        component: tagTemplate,
        context: {
          tag: row.fieldValue
        }
      });
    });

    createPaginatedPages({
      edges: result.data.allMarkdownRemark.edges,
      createPage: createPage,
      pageTemplate: archivesTemplate,
      pageLength: 10, // This is optional and defaults to 10 if not used
      pathPrefix: `archives`, // This is optional and defaults to an empty string if not used
      context: {} // This is optional and defaults to an empty object if not used
    });
  });
};