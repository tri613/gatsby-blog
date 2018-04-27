import React from 'react';
import PrimaryButton from '@/components/styled/primaryButton';

import GatsbyLink from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>施工中rrrr</p>
    <PrimaryButton>Test</PrimaryButton>
    <br />
    <GatsbyLink to="/archives">archives</GatsbyLink>
  </div>
);

export default IndexPage;
