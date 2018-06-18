import React from 'react';
import Link from 'gatsby-link';

import Divider from 'antd/lib/divider';
import Icon from 'antd/lib/icon';
import { Row } from 'antd/lib/grid';

import { Href, NewTabHref } from './../components/href';
import { SiteTitle } from './../components/title';
import { CoolAvatar } from './../components/avatar';
import styled from 'styled-components';

const Header = ({ siteTitle }) => (
  <header style={{ paddingTop: '1.5rem' }}>
    <Row type="flex" align="start">
      <div style={{ flexBasis: `80px`, marginRight: `1.5rem` }}>
        <CoolAvatar src="https://i.imgur.com/Fs7JXQQ.jpg" border="3px" />
      </div>
      <div>
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
      </div>
    </Row>
    <nav style={{ margin: '1rem 0' }}>
      <Link to="/">Home</Link>
      <Divider type="vertical" />
      <Link to="/archives/">Archives</Link>
    </nav>
    <Divider />
  </header>
);

export default Header;
