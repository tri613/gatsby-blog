import React from 'react';
import Link from 'gatsby-link';

export default function ArchiveTemplate({ data, pathContext }) {
  const nodes = pathContext.group;
  let paginations = [];
  
  if (!pathContext.last) {
    const key = pathContext.index + 1;
    paginations.push(
      <React.Fragment key={key}>
        <Link to={`/${pathContext.pathPrefix}/${key}/`}>Next</Link>
        {` `}
      </React.Fragment>
    );
  }

  if (!pathContext.first) {
    const key = pathContext.index - 1;
    const to = key === 1 ? `/${pathContext.pathPrefix}/` : `/${pathContext.pathPrefix}/${key}/`;
    paginations.push(
      <React.Fragment key={key}>
        <Link to={to} >Prev</Link>
        {` `}
      </React.Fragment>
    );
  }

  return (
    <div>
      <ul>
        {nodes.map(({ node }) =>
          <li key={node.frontmatter.title}>
            <Link to={node.fields.path}>{node.frontmatter.title}</Link>
          </li>
        )}
      </ul>
      <span>
        {paginations}
      </span>
    </div>
  );
}
