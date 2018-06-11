import React from 'react';
import { navigateTo } from 'gatsby-link';
import map from 'lodash/map';
import moment from 'moment';
import { Pagination, Icon } from 'antd';

import { Content } from './../components/layout';
import { PageTitle } from './../components/title';
import PostList from './../components/postList';

export default function ArchiveTemplate({ pathContext }) {
  const nodes = pathContext.group;
  const postsByMonth = nodes.reduce((result, { node }) => {
    const key = moment(node.frontmatter.datetime).format('YYYY/MM/DD');
    result[key] = result[key] ? [...result[key], node] : [node];
    return result;
  }, {});

  return (
    <Content>
      {map(postsByMonth, (nodes, month) => (
        <div style={{ marginBottom: `1.5rem` }} key={month}>
          <PageTitle>
            <Icon type="inbox" /> {month}
          </PageTitle>
          <PostList nodes={nodes} />
        </div>
      ))}
      <Pagination
        size="small"
        total={pathContext.pageCount}
        pageSize={1}
        current={pathContext.index}
        onChange={page =>
          navigateTo(
            `/${pathContext.pathPrefix}${page === 1 ? '/' : `/${page}/`}`
          )
        }
        style={{ textAlign: `center` }}
      />
    </Content>
  );
}
