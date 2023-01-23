import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle({
  body: {
    backgroundColor: "#e7f5ff",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    margin: 0,
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
  },
  code: {
    fontFamily:
      'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
  },
});

export default GlobalStyle;
