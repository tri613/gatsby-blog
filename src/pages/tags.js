import React from 'react';
import Link from 'gatsby-link';
import Icon from 'antd/lib/icon';
import List from 'antd/lib/list';

import { Content } from '../components/layout';
import { PageTitle } from '../components/title';
import { WhiteList, HoverableItem } from '../components/postList';

export default function Tags({ data }) {
  const group = data.allMarkdownRemark.group
    ? data.allMarkdownRemark.group
      .filter(row => !!row.fieldValue)
      .map(row => {
        const totalCount = row.edges.reduce((sum, current) => {
          return current.node.frontmatter.published ? sum + 1 : sum;
        }, 0);
        return {
          ...row,
          totalCount
        };
      })
      .sort((a, b) => a.totalCount < b.totalCount)
    : [];

  return (
    <Content>
      <PageTitle>
        <Icon type="tags" /> Tags
      </PageTitle>
      <WhiteList
        bordered
        dataSource={group}
        renderItem={row => (
          <HoverableItem key={row.fieldValue}>
            <Link to={`/tags/${row.fieldValue}`} style={{ width: `100%` }}>
              <List.Item.Meta
                title={`# ${row.fieldValue}`}
                description={`${row.totalCount} results`}
              />
            </Link>
          </HoverableItem>
        )}
      />
    </Content>
  );
}

export const query = graphql`
  query AllTagPageQuery {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        totalCount
        fieldValue
        edges {
          node {
            frontmatter {
              published
            }
          }
        }
      }
    }
  }
`;
