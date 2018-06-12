import React from 'react';
import Link from 'gatsby-link';

import Divider from 'antd/lib/divider';
import Icon from 'antd/lib/icon';
import { Row, Col } from 'antd/lib/grid';

import { Href, NewTabHref } from './../components/href';
import { SiteTitle } from './../components/title';
import { CoolAvatar } from './../components/avatar';

const Header = ({ siteTitle }) => (
  <header style={{ paddingTop: '1.5rem' }}>
    <Row gutter={24} type="flex" align="middle">
      <Col span={4}>
        <CoolAvatar src="https://i.imgur.com/Fs7JXQQ.jpg" border="3px" />
      </Col>
      <Col span={20}>
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
      </Col>
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
