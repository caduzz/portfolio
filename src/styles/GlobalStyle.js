import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    filter: hue-rotate(50);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    background-color: #1a1a1a;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html {
    scroll-behavior: smooth;
    transition: .2s;
  }

  section {
    scroll-behavior: smooth;
    transition: .2s;
  }

  body::-webkit-scrollbar {
    width: 7px;
    /* width of the entire scrollbar */
    background: transparent;
    /* color of the tracking area */
  }

  body::-webkit-scrollbar-track {
    background: transparent;
    /* color of the tracking area */
  }

  body::-webkit-scrollbar-thumb {
    background-color: #444;
    /* color of the scroll thumb */
  }

  a {
    color: #7bb8ff;
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    opacity: 0.8;
  }
`;

export default GlobalStyle;