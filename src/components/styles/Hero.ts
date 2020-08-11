import styled from 'styled-components';

export const HeroStyle = styled.header`
  font-size: 1.2rem;

  .hero,
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .info {
    margin: 10px auto;
    height: 500px;
    width: 290px;
    text-align: left;

    .greeting {
      font-size: 2.5rem;
      font-weight: bolder;
      align-self: flex-start;
    }
    .intro {
      align-self: flex-start;
      div {
        background-color: #ec3c37;
        width: 50px;
        font-size: 1rem;
      }
    }

    h1 {
      font-size: 2rem;
      padding: 10px 0;
      font-weight: bolder;
    }
    p {
      line-height: 2rem;
    }

    button {
      margin: 10px 0;
      padding: 10px 20px;
      border: 1px solid #fff;
      background-color: transparent;
      border-radius: 20px;
      color: #fff;
      font-size: 1rem;
    }
  }
  .graphics {
    display: flex;
    flex-direction: column;
    align-items: center;
    .pic {
      border-radius: 150px 100px;
      background-color: #c7c7c7;
      height: 200px;
      width: 200px;
      border-top: 1px solid #ec3c37;
      border-bottom: 3px solid #ec3c37;
      border-left: 1px solid #ec3c37;
      border-right: 5px solid #ec3c37;

      img {
        width: 100%;
        border-radius: 50px 25px;
      }
    }
  }

  @media (min-width: 768px) {
    margin: 20px 0;
    align-items: flex-start;
    .hero {
      justify-content: space-around;
      flex-direction: row;

      .info {
        width: 45%;
        align-items: flex-start;
        margin: 0;
      }

      .graphics {
        flex-direction: row;
        justify-content: space-between;
        width: 45%;
        .pic {
          height: 250px;
          width: 250px;
        }
      }
    }
  }
`;
