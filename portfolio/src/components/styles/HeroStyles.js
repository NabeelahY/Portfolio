import styled from 'styled-components';

export const HeroStyle = styled.div`
  display: flex;
  justify-content: flex-start;
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
  font-weight: 200;
  font-size: 48px;
  margin: 0 auto;
  padding: 0 15px;
`;
