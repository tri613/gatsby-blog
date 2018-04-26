import React from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';

const Tag = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <div>
      <h1>#{tag}</h1>
      <ul>
        {edges.map(({ node }) => 
          <li key={node.id}>
            <Link to={node.fields.path}>{node.frontmatter.title}</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Tag;

export const query = graphql`
  query TagPageQuery($tag: [String]) {
    allMarkdownRemark(filter: {frontmatter: { tags: { in: $tag } }}) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            path
          }
        }
      }
    }
  }
`;