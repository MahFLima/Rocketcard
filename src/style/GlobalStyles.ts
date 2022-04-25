import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: var(--bg-card);
  }
  :root {
  --bg: #000000;
  --bg-card: #0E1218;
  --text: #F1F1F1;
  --img-profile: #8257e5;
  --buttons: #FFF;
  --border-button: #1A1A1A;
}

html{
  width: 100vw;
  height: 100vh;
  font-family: Prompt, sans-serif;
  color: var(--text);
}
`;
