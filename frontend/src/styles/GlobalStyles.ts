import { createGlobalStyle } from 'styled-components';
import { colors } from '../components/StyledComponents/Common';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #ebf6ff;
    margin: 0;
    padding: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: ${colors.black};
  }
  p, input, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: ${colors.black};
  }
`;

export default GlobalStyles;
