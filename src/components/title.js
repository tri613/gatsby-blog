import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

export const PageTitle = styled.h2`
  color: ${props => props.theme.colors.primary09};
`;

const HoverTitle = styled(Link)`
  > h1 > span {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      height: 3px;
      width: 0;
      left: 0;
      bottom: 0;
      transition: 0.3s all;
      background-color: ${props => props.theme.colors.primary05};
    }
  }

  &:hover {
    text-decoration: none;
    > h1 > span::after {
      width: 100%;
    }
  }

  &:focus {
    text-decoration: none;
    > h1 > span::after {
      background-color: ${props => props.theme.colors.primary07};
    }
  }
`;

export const SiteTitle = ({ to, children, ...rest }) => (
  <HoverTitle to={to} {...rest}>
    <h1>
      <span>{children}</span>
    </h1>
  </HoverTitle>
);
