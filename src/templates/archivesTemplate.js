import React from 'react';
import { navigateTo } from 'gatsby-link';
import map from 'lodash/map';
import moment from 'moment';
import Pagination from 'antd/lib/pagination';
import Icon from 'antd/lib/icon';
import Helmet from 'react-helmet';

import { Content } from './../components/layout';
import { PageTitle } from './../components/title';
import PostList from './../components/postList';

import { siteMetaQuery } from './../utils/query';

export default function ArchiveTemplate({ pathContext, data }) {
  const nodes = pathContext.group;
  const postsByMonth = nodes.reduce((result, { node }) => {
    const key = moment(node.frontmatter.datetime).format('YYYY/MM');
    result[key] = result[key] ? [...result[key], node] : [node];
    return result;
  }, {});

  return (
    <Content>
      <Helmet
        title={`Archives - ${data.site.siteMetadata.title}`}
        meta={[
          {
            name: 'description',
            content: `Archives for ${data.site.siteMetadata.title}`
          }
        ]}
      />
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

export const pageQuery = graphql`
  query ArchiveQuery {
    site {
      ...SiteMeta
    }
  }
`;
