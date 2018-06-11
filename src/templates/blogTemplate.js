import React from 'react';
import Post from './../components/post';
import { blogPostQuery } from './../utils/query';

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  return <Post node={markdownRemark} />;
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      ...BlogPost
    }
  }
`;
