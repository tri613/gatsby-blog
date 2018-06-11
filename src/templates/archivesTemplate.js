import React from 'react';
import Link from 'gatsby-link';
import map from 'lodash/map';
import moment from 'moment';

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

  let paginations = [];

  if (!pathContext.first) {
    const key = pathContext.index - 1;
    const to =
      key === 1
        ? `/${pathContext.pathPrefix}/`
        : `/${pathContext.pathPrefix}/${key}/`;
    paginations.push(
      <React.Fragment key={key}>
        <Link to={to}>{'<'} Prev</Link>
      </React.Fragment>
    );
  }

  if (!pathContext.last) {
    const key = pathContext.index + 1;
    if (paginations.length) {
      paginations.push(<span style={{ margin: '0 .5rem' }}>|</span>);
    }
    paginations.push(
      <React.Fragment key={key}>
        <Link to={`/${pathContext.pathPrefix}/${key}/`}>Next {'>'} </Link>
      </React.Fragment>
    );
  }

  return (
    <Content>
      {map(postsByMonth, (nodes, month) => (
        <div style={{ marginBottom: `1.5rem` }} key={month}>
          <PageTitle>{month}</PageTitle>
          <PostList nodes={nodes} />
        </div>
      ))}
      <span style={{ float: 'right' }}>{paginations}</span>
    </Content>
  );
}
