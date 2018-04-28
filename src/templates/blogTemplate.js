import React from 'react';
import Link from 'gatsby-link';

export default function BlogTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return <article>
    <h1 style={{ marginTop: '2rem' }}>{frontmatter.title}</h1>
    <section style={{ marginBottom: '1.5rem' }}>
      {frontmatter.date}
      <br />
      {frontmatter.tags.map(tag => 
        <span key={tag} style={{ marginRight: '.5rem' }}>
          <Link to={`/tags/${tag}`}>#{tag}</Link>
        </span>
      )}
    </section>
    <section dangerouslySetInnerHTML={{ __html: html }} />
  </article>;
}

export const pageQuery = graphql`
  query BlogPostQuery($title: String!) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD HH:mm:ss")
        path
        title
        tags
      }
    }
  }
`;