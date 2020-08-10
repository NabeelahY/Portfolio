import styled from 'styled-components';

export const StackStyles = styled.section`
  padding: 20px;
  text-align: center;
  height: 300px;
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin: 10px 0;
  }

  .ant-carousel .slick-slider {
    margin: 20px 0;
    height: 100%;
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
  margin: 0 10px;
  div {
    font-size: 5rem;
  }
  img {
    height: 5rem;
    margin: 0 auto;
    padding: 10px 0 20px 0;
    fill: #fff;

  }
`;