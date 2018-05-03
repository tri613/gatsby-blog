import React from 'react';

import Link from 'gatsby-link';

export default function Tags({ data }) {
  return <div>
    <h2>Tags!</h2>
    <ul>
      {data.allMarkdownRemark.group.map(row => <li key={row.fieldValue}>
        <Link to={`/tags/${row.fieldValue}`}>
              #{row.fieldValue} - {row.totalCount} results
        </Link>
      </li>)}
    </ul>
  </div>;
}

export const query = graphql`
  query AllTagPageQuery {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        totalCount
        fieldValue
      }
    }
  }
`;
