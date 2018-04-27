import { Button } from 'rebass';

const PrimaryButton = Button.extend`
  cursor: pointer;
  background-color: ${props => props.theme.colors.primary};
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

export default PrimaryButton;