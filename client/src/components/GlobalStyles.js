import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Raleway', sans-serif;
  }
  h1 {
    font-size: 1.5em;
    padding: 10px;
    border-bottom: 1px solid lightgrey;
  }
`;
