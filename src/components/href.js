import React from 'react';
import styled from 'styled-components';

export const Href = styled.a`
  padding: 0 4px;
`;

export const NewTabHref = props => (
  <Href target="_blank" rel="noopener noreferrer" {...props} />
);
