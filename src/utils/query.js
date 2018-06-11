export const blogPostQuery = graphql`
  fragment BlogPost on MarkdownRemark {
    id
    html
    frontmatter {
      title
      datetime
      tags
    }
    fields {
      path
    }
  }
`;
