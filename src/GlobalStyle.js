import { createGlobalStyle } from "styled-components";
import pageImage from "./images/background.png";

const GlobalStyle = createGlobalStyle`
  html {
  box-sizing: border-box;
}

*, ::before, ::after {
  box-sizing: inherit;
}

.root {
  padding: 15px 5px;
  font-family: "Roboto", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: center / cover fixed url(${pageImage});
}
`;

export default GlobalStyle;
