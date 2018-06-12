import React from 'react';
import List from 'antd/lib/list';
import Link from 'gatsby-link';
import styled from 'styled-components';

import { Timestamp } from './post';

const WhiteList = styled(List)`
  background-color: rgba(255, 255, 255, 0.4);
`;

const HoverableItem = styled(List.Item)`
  &:hover {
    background-color: ${props => props.theme.colors.primary03};
  }
`;

const PostList = ({ nodes }) => (
  <WhiteList
    bordered
    dataSource={nodes}
    renderItem={node => (
      <HoverableItem key={node.id}>
        <Link to={node.fields.path} style={{ width: `100%` }}>
          <List.Item.Meta
            title={node.frontmatter.title}
            description={<Timestamp datetime={node.frontmatter.datetime} />}
          />
        </Link>
      </HoverableItem>
    )}
  />
);

export default PostList;
