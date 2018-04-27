import { Button } from 'rebass';

const PrimaryButton = Button.extend`
  cursor: pointer;
  background-color: ${props => props.theme.primary};
  &:hover {
    color: ${props => props.theme.secondary}
  }
`;

export default PrimaryButton;