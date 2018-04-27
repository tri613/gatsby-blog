import styled from 'styled-components';

const PrimaryButton = styled.button`
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
`;

export default PrimaryButton;