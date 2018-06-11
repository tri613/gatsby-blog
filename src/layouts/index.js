import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import BackTop from 'antd/lib/back-top';

import 'prismjs/themes/prism-tomorrow.css';
import 'antd/dist/antd.less';
import globalStyle from './../styles/global.js';
globalStyle();
// import './../styles/global.css';

import theme from './../styles/theme';
import Header from '../components/header';
import { Wrapper, Body, Footer, Center } from './../components/layout';

const Layout = ({ children, data }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: data.site.siteMetadata.description }
        ]}
      />
      <Wrapper>
        <Center>
          <Header siteTitle={data.site.siteMetadata.title} />
        </Center>
        <Body center>{children()}</Body>
        <Center>
          <Footer>© 2018 Trina Lu</Footer>
        </Center>
        <BackTop />
      </Wrapper>
    </React.Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
