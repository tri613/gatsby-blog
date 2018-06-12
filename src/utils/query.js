export const blogPostQuery = graphql`
  fragment BlogPost on MarkdownRemark {
    id
    html
    excerpt
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
  const { frontmatter, html, excerpt } = node;
  const { title, tags, datetime } = frontmatter;

  return {
    title,
    tags,
    datetime,
    excerpt,
    content: html,
    url: node.fields.path
  };
};

export const siteMetaQuery = graphql`
  fragment SiteMeta on Site {
    siteMetadata {
      title
      description
    }
  }
`;
