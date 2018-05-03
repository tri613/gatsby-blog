import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
  <div>
    <h2>Recent Posts</h2>
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.fields.path}>
            {node.frontmatter.title} - {node.frontmatter.date}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default IndexPage;

export const indexQuery = graphql`
query IndexPageQuery {
  allMarkdownRemark(
    limit: 5
    sort: {fields: [frontmatter___date], order: DESC}
    filter: {frontmatter: { published: { eq: true} } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
          }
          fields {
            path
          }
        }
      }
    }
  }
`;
