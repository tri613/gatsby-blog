import React from 'react';
import { ThemeProvider } from 'styled-components';

import Post from './../../components/post';
import theme from './../../styles/theme';

const BlogPostPreview = ({ entry, widgetFor }) => {
  const title = entry.getIn(['data', 'title']);
  const datetime = entry.getIn(['data', 'datetime']);
  const tags = entry.getIn(['data', 'tags'])
    ? entry.getIn(['data', 'tags'])
    : [];
  const post = {
    title,
    datetime,
    tags,
    url: `/tags/`
  };
  return (
    <ThemeProvider theme={theme}>
      <section style={{ padding: `1rem` }}>
        <Post post={post} bodyComponent={widgetFor('body')} />
      </section>
    </ThemeProvider>
  );
};

export default BlogPostPreview;
