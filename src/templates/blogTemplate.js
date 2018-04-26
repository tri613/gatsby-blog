import React from 'react';
import Link from 'gatsby-link';
import { TAGS_ROOT_URL } from './../utils/routes';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <h3>
        {frontmatter.tags.map(tag => 
          <span key={tag}>
            <Link to={`${TAGS_ROOT_URL}/${tag}`}>#{tag}</Link>
            {` `}
          </span>
        )}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostQuery($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        date(formatString: "MMMM/DD/YYYY")
        path
        title
        tags
      }
    }
  }
`;