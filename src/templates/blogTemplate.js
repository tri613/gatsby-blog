import React from 'react';
import Post from './../components/post';
import { blogPostQuery, extractBlogPostProperties } from './../utils/query';

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const postProps = extractBlogPostProperties(markdownRemark);
  return <Post post={postProps} />;
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...BlogPost
    }
  }
`;
