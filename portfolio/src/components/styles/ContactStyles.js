import styled from 'styled-components';
import { device } from './devices';

export const ContactWrapper = styled.div`
  padding: 10px;
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400&display=swap');
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 350;
  line-height: 2;

  form {
    .top {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      input {
        border: none;
        width: 45%;
        height: 20px;
        margin: 10px;
        padding: 15px 10px;
      }
    }
    input {
      border-radius: 3px;
      border: none;
      width: 45%;
      height: 80px;
      margin: 10px;
      padding: 15px 10px;
    }

    button {
      width: 50%
      padding: 15px;
      border: none;
      border-radius: 5px;
      font-size: 0.9rem;
      margin: 10px;
      background: #fff;
      &:hover {
        font-weight: bold;
        color: #1cb5e0;
      }
    }
  }

  @media ${device.tablet} {
    font-size: 24px;
    div {
      p {
        font-size: 1.2rem;
      }
      a {
        font-size: 1.2rem;
      }
    }

    form {
      .top {
        flex-direction: row;
        input {
          border: none;
          width: 20%;
        }
      }

      button {
        width: 20%
      }
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  h3 {
    font-size: 1rem;
    font-weight: bold;
  }
  span {
    margin: 0 10px;
    font-size: 1.5rem;
  }

  @media ${device.laptop} {
    h3 {
      font-size: 28px;
      font-weight: bold;
    }
    span {
      margin: 0 10px;
      font-size: 60px;
    }
  }
`;
