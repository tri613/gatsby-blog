import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <header>
    <h1 style={{ marginBottom: '.8rem' }}>{siteTitle}</h1>
    {/* <h4 style={{ marginTop: '0' }}>一些筆記和雜談</h4> */}
    <p>
      Hi, I'm Trina. Find me on{' '}
      <a
        href="https://twitter.com/tri613"
        target="_blank"
        rel="noopener noreferrer"
      >
        twitter
      </a>{' '} or {' '}
      <a
        href="https://github.com/tri613"
        target="_blank"
        rel="noopener noreferrer"
      >
        github
      </a>.
    </p>
    <nav style={{ margin: '1rem 0' }}>
      <Link to="/">Home</Link> / <Link to="/archives/">Archives</Link>
    </nav>
    <hr />
  </header>
);

export default Header;
