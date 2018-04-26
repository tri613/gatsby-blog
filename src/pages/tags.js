import React from 'react';

import Link from 'gatsby-link';
import { TAGS_ROOT_URL } from './../utils/routes';

export default function Tags({ data }) {
  return <div>
    <h1>Tags!</h1>
    <ul>
      {data.allMarkdownRemark.group.map(row => <li key={row.fieldValue}>
        <Link to={`${TAGS_ROOT_URL}/${row.fieldValue}`}>
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
