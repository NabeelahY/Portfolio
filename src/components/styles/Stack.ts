import styled from 'styled-components';

export const StackStyles = styled.section`
  padding: 20px 0;
  text-align: center;

  h1 {
    font-size: 1.4rem;
    font-weight: bold;
    margin: 10px 0;
    text-decoration: underline solid #ec3c37;
  }

  .ant-carousel .slick-slider {
    margin: 20px 0;
    &.slide {
      height: 200px;
    }
  }
`;

export const IconStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
  div {
    font-size: 4rem;
  }
  img {
    height: 4rem;
    margin: 10px auto;
  }
`;
