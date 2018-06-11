import styled from 'styled-components';

const centerBlock = `
  margin: 0 auto;
  max-width: 680px;
  padding: 0px 1.0875rem;
  width: 90%;
`;

export const Wrapper = styled.div`
  border-top: 2px solid ${props => props.theme.colors.primary06};
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 1rem;
`;

export const Center = styled.div`
  ${centerBlock};
`;

export const Body = styled.div`
  flex: 1 auto;
  ${props => (props.center ? centerBlock : '')};
`;

export const Footer = styled.footer`
  text-align: right;
  padding: 1rem;
`;

export const Content = styled.section`
  // nothing yet
`;
