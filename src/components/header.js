import React from 'react';
import Link from 'gatsby-link';
import { Divider, Icon } from 'antd';

import { Href, NewTabHref } from './../components/href';
import { SiteTitle } from './../components/title';

const Header = ({ siteTitle }) => (
  <header style={{ paddingTop: '1.5rem' }}>
    <SiteTitle style={{ marginBottom: '.8rem' }} to="/">
      {siteTitle}
    </SiteTitle>
    <p>
      Hi, I'm Trina. Find me on
      <NewTabHref href="https://twitter.com/tri613">
        <Icon type="twitter" />
      </NewTabHref>,
      <NewTabHref href="https://github.com/tri613">
        <Icon type="github" />
      </NewTabHref>
      and
      <Href href="mailto:tri613@gmail.com" style={{ padding: `0 4px` }}>
        <Icon type="mail" />
      </Href>.
    </p>
    <nav style={{ margin: '1rem 0' }}>
      <Link to="/">Home</Link>
      <Divider type="vertical" />
      <Link to="/archives/">Archives</Link>
    </nav>
    <Divider />
  </header>
);

export default Header;
