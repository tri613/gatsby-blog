import React from 'react';
import Link from 'gatsby-link';
import map from 'lodash/map';

export default function ArchiveTemplate({ pathContext }) {
  const nodes = pathContext.group;
  const postsByMonth = nodes.reduce((result, { node }) => {
    const key = node.frontmatter.date;
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
        <Link to={to}>{'\<'} Prev</Link>
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
        <Link to={`/${pathContext.pathPrefix}/${key}/`}>Next {'\>'} </Link>
      </React.Fragment>
    );
  }

  return (
    <div>
      <ul>
        {map(postsByMonth, (nodes, month) => (
          <li key={month}>
            <h4>{month}</h4>
            <ul>
              {nodes.map(node => (
                <li key={node.frontmatter.title}>
                  <Link to={node.fields.path}>{node.frontmatter.title}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <span style={{ float: 'right' }}>{paginations}</span>
    </div>
  );
}
