import React from 'react';
import Icon from 'antd/lib/icon';

import { PageTitle } from './../components/title';
import Post from './../components/post';
import { blogPostQuery, extractBlogPostProperties } from './../utils/query';

const IndexPage = ({ data }) => (
  <div>
    <PageTitle>
      <Icon type="paper-clip" /> Recent Posts
    </PageTitle>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Post
        key={node.id}
        readmore={true}
        post={extractBlogPostProperties(node)}
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
    ) {
      edges {
        node {
          ...BlogPost
        }
      }
    }
  }
`;
