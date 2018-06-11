import React from 'react';

import { PageTitle } from './../components/title';
import Post from './../components/post';
import { blogPostQuery } from './../utils/query';

const IndexPage = ({ data }) => (
  <div>
    <PageTitle>Recent Posts</PageTitle>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Post
        readmore={true}
        key={node.id}
        node={node}
        style={{ marginBottom: `1rem` }}
      />
    ))}
  </div>
);

export default IndexPage;

export const indexQuery = graphql`
  query IndexPageQuery {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___datetime], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          ...BlogPost
        }
      }
    }
  }
`;
