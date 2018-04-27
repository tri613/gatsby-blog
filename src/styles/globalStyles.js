import styledNormalize from 'styled-normalize';
import { injectGlobal } from 'styled-components';
import theme from './theme';

export default () => injectGlobal`
  ${styledNormalize}
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${theme.colors.bg}
  }
`;