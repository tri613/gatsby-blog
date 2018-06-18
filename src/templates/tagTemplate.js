import React from 'react';
import Icon from 'antd/lib/icon';
import Helmet from 'react-helmet';

import { Content } from './../components/layout';
import { PageTitle } from './../components/title';
import PostList from './../components/postList';

import { siteMetaQuery, blogPostQuery } from './../utils/query';

const TagTemplate = ({ pathContext, data }) => {
  const { tag } = pathContext;
  const { edges } = data.allMarkdownRemark;

  return (
    <Content>
      <Helmet
        title={`#${tag} - ${data.site.siteMetadata.title}`}
        meta={[
          {
            name: 'description',
            content: `Tag #${tag} for ${data.site.siteMetadata.title}`
          }
        ]}
      />
      <PageTitle>
        <Icon type="tag" style={{ marginRight: `3px` }} /> # {tag}
      </PageTitle>
      <PostList nodes={edges.map(edge => edge.node)} />
    </Content>
  );
};

export default TagTemplate;

export const query = graphql`
  query TagPageQuery($tag: [String]) {
    site {
      ...SiteMeta
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___datetime] }
      filter: { frontmatter: { tags: { in: $tag }, published: { eq: true } } }
    ) {
      edges {
        node {
          ...BlogPost
        }
      }
    }
  }
`;
