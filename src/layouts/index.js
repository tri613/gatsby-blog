import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'prismjs/themes/prism-tomorrow.css';
import 'antd/dist/antd.less';

import Header from '../components/header';

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: data.site.siteMetadata.description },
      ]}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 680,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} />
      {children()}
    </div>
  </div>
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
        description
      }
    }
  }
`;
