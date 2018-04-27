import { css } from 'styled-components';

const sizes = {
  desktop: 80,
  laptop: 64,
  tablet: 48,
  phone: 32
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}em) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

/* Now that you've defined your media templates, you can use them like this:
const MediaThemedH1 = styled.h1`
  ${props => props.theme.media.desktop`color: ${props.theme.fifth}`};
  ${props => props.theme.media.tabletLarge`color: ${props.theme.second}`};
  ${props => props.theme.media.tabletSmall`color: ${props.theme.fourth}`};
  ${props => props.theme.media.phone`color: ${props.theme.main}`};
`;
*/

const colors = {
  primary: '#00D9C0',
  secondary: '#FF4245',
  dark: '#343447',
  light: '#FFFDF9',
  shade: '#EAE9E5',
};
colors.bg = colors.shade;

// Pass media template via theme object and Styled Components ThemeProvider
const theme = {
  colors,
  media,
};

export default theme;