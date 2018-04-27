import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Provider, Container } from 'rebass';

import globalStyles from '@/styles/globalStyles';
import theme from '@/styles/theme';

globalStyles();

const Layout = ({ children, data }) => (
  <Provider theme={theme}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Container pt={5}>
      {children()}
    </Container>
  </Provider>
);

Layout.propTypes = {
  children: PropTypes.func,
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
