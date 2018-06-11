import React from 'react';
import Link from 'gatsby-link';
import { Href, NewTabHref } from './../components/href';
import { Divider, Icon } from 'antd';

const Header = ({ siteTitle }) => (
  <header style={{ paddingTop: '1.5rem' }}>
    <h1 style={{ marginBottom: '.8rem' }}>{siteTitle}</h1>
    {/* <h4 style={{ marginTop: '0' }}>一些筆記和雜談</h4> */}
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
