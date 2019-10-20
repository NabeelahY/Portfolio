import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Oswald|Righteous&display=swap');
    body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        font-family: 'Oswald', sans-serif;
        height: 100vh;
        background-image: linear-gradient(180deg, #3558D3, #FE8D8D);
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export const HeroStyle = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Righteous&display=swap');
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-top: 150px;
  h1 {
    text-align: center;
    font-family: 'Righteous', cursive;
    font-size: 230px;
    background: linear-gradient(180deg, #ffffff 40%, #a9a8ed);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  span {
    font-size: 72px;
  }
`;

export const TagLine = styled.div`
  text-align: left;
  color: #ffffff;
  width: 560px;
  font-weight: 50;
  font-size: 48px;
  margin: 0 auto;
`;
