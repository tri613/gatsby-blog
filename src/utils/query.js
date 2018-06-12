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
export const extractBlogPostProperties = node => {
  const { frontmatter, html } = node;
  const { title, tags, datetime } = frontmatter;

  return {
    title,
    tags,
    datetime,
    content: html,
    url: node.fields.path
  };
};
