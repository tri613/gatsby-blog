import { injectGlobal } from 'styled-components';
import { darken } from 'polished';
import theme from './theme';

export default () => injectGlobal`
  html {
    background-color: ${theme.colors.primary06};
    ::-webkit-scrollbar-button {
      display: none;
      height: 13px;
      border-radius: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${darken(0.15, theme.colors.bg)};
      /* background-color: ${theme.colors.primary03}; */
      &:hover {
        background-color: ${darken(0.25, theme.colors.bg)};
      }
    }
    ::-webkit-scrollbar-track {
      background-color: ${darken(0.05, theme.colors.bg)};
    }
    ::-webkit-scrollbar {
      width: 13px;
    }
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
