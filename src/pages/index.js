import React from 'react';
import Icon from 'antd/lib/icon';
import Alert from 'antd/lib/alert';

import { PageTitle } from './../components/title';
import Post from './../components/post';
import { blogPostQuery, extractBlogPostProperties } from './../utils/query';

const IndexPage = ({ data }) => (
  <div>
    <PageTitle>
      <Icon type="paper-clip" /> Recent Posts
    </PageTitle>
    {data.allMarkdownRemark && data.allMarkdownRemark.edges ? (
      data.allMarkdownRemark.edges.map(({ node }) => (
        <Post
          key={node.id}
          short={true}
          post={extractBlogPostProperties(node)}
          style={{ marginBottom: `1rem` }}
        />
      ))
    ) : (
      <Alert type="warning" showIcon={true} message="No posts yet!" />
    )}
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
