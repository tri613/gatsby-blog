import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

import globalStyles from '@/styles/globalStyles';
import theme from '@/styles/theme';

globalStyles();

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <div>{children()}</div>
    </React.Fragment>
  </ThemeProvider>
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
