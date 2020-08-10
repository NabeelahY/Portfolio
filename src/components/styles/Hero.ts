import styled from 'styled-components';

export const HeroStyle = styled.header`
  font-size: 1.2rem;
  padding: 20px;

  .hero,
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .pic {
    border-radius: 150px 100px;
    background-color: #c7c7c7;
    height: 200px;
    width: 200px;

    img {
      width: 100%;
      border-radius: 50px 25px;
    }
  }

  .info {
    margin: 20px 0;
    height: 500px;
    text-align: center;

    div {
      font-size: 2rem;
      font-weight: bolder;
    }

    h1 {
      font-size: 2.4rem;
      padding: 10px 0;
      font-weight: bolder;
    }
    p {
      line-height: 2rem;
    }

    button {
      margin: 10px 0;
      padding: 10px 20px;
      border: 1px solid #c7c7c7;
      background-color: transparent;
      border-radius: 20px;
      color: #fff;
    }
  }
`;
