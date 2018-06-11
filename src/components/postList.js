import React from 'react';
import List from 'antd/lib/list';
import Link from 'gatsby-link';

import { Timestamp } from './post';

const PostList = ({ nodes }) => (
  <List
    bordered
    itemLayout="vertical"
    dataSource={nodes}
    renderItem={node => (
      <List.Item key={node.id}>
        <Link to={node.fields.path}>
          <List.Item.Meta
            title={node.frontmatter.title}
            description={<Timestamp datetime={node.frontmatter.datetime} />}
          />
        </Link>
      </List.Item>
    )}
  />
);

export default PostList;
