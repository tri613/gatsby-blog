import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  ${styledNormalize}
  * {
    box-sizing: border-box;
  }
`;