import React from 'react';
import Icon from 'antd/lib/icon';

import { PageTitle } from './../components/title';
import PostList from './../components/postList';

const TagTemplate = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <div>
      <PageTitle>
        <Icon type="tag" style={{ marginRight: `3px` }} /> # {tag}
      </PageTitle>
      <PostList nodes={edges.map(edge => edge.node)} />
    </div>
  );
};

export default TagTemplate;

export const query = graphql`
  query TagPageQuery($tag: [String]) {
    allMarkdownRemark(filter: { frontmatter: { tags: { in: $tag } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            tags
          }
          fields {
            path
          }
        }
      }
    }
  }
`;
