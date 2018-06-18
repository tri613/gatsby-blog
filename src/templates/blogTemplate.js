import React from 'react';
import Helmet from 'react-helmet';

import Post from './../components/post';
import { Content } from './../components/layout';
import {
  blogPostQuery,
  extractBlogPostProperties,
  siteMetaQuery
} from './../utils/query';

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const postProps = extractBlogPostProperties(markdownRemark);
  return (
    <Content>
      <Helmet
        title={`${postProps.title} - ${data.site.siteMetadata.title}`}
        meta={[
          {
            name: 'description',
            content: postProps.description || postProps.excerpt
          }
        ]}
      />
      <Post post={postProps} />
    </Content>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...BlogPost
    }
    site {
      ...SiteMeta
    }
  }
`;
