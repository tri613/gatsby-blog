import { injectGlobal } from 'styled-components';
import theme from './theme';

export default () => injectGlobal`
  html {
    background-color: ${theme.colors.primary06};
  }

  * {
    box-sizing: border-box;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    border-radius: 0.1rem;
    margin: 1rem 0;
    padding: 1.5rem 1.2rem;
    letter-spacing: 0.5px;
  }
`;
