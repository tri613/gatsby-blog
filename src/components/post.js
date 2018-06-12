import React from 'react';
import PropTypes from 'prop-types';

import Link from 'gatsby-link';
import Icon from 'antd/lib/icon';
import Card from 'antd/lib/card';
import Tag from 'antd/lib/tag';
import Divider from 'antd/lib/divider';
import Button from 'antd/lib/button';

import moment from 'moment';
import styled, { withTheme } from 'styled-components';

export const Timestamp = ({ datetime, ...rest }) => (
  <span {...rest}>
    <span>
      <Icon type="clock-circle-o" />
    </span>
    <span style={{ marginLeft: `5px` }}>
      {moment(datetime).format('YYYY/MM/DD HH:mm:ss')}
    </span>
  </span>
);

export const Tags = withTheme(({ tags, theme }) =>
  tags.map(tag => (
    <Tag key={tag} color={theme.colors.primary04}>
      <Link to={`/tags/${tag}`}># {tag}</Link>
    </Tag>
  ))
);

const ReadMoreButton = styled(Button)`
  &:hover {
    background-color: ${props => props.theme.colors.primary06} !important;
    color: #fff !important;
  }
`;

export const Post = ({ post, readmore = false, ...rest }) => {
  const { title, tags, datetime, url, content } = post;

  const [publicContent, secretContent] = content.split(
    /<!--\s*read more\s*-->/i
  );

  return (
    <article {...rest}>
      <Card>
        <Link to={url}>
          <h1>{title}</h1>
        </Link>
        <section>
          <p style={{ color: `rgba(0,0,0,.45)` }}>
            <Timestamp datetime={datetime} />
          </p>
          <div>
            <Tags tags={tags} />
          </div>
        </section>
        <Divider />
        <section dangerouslySetInnerHTML={{ __html: publicContent }} />
        {secretContent && readmore ? (
          <div style={{ marginTop: `2rem` }}>
            <Link to={url}>
              <ReadMoreButton type="primary" ghost>
                Read more
              </ReadMoreButton>
            </Link>
          </div>
        ) : (
          <section dangerouslySetInnerHTML={{ __html: secretContent }} />
        )}
      </Card>
    </article>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.array,
    datetime: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  }),
  readmore: PropTypes.bool
};

export default Post;
