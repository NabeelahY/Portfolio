import styled from 'styled-components';

export const ContactWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400&display=swap');
  background: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  width: 800px;
  text-align: center;
  font-size: 24px;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 350;
  line-height: 2;
  h3 {
    font-size: 28px;
    font-weight: bold;
  }

  p {
    a {
      color: #fff;
    }

    &:hover {
      font-weight: bold;
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  span {
    margin: 0 10px;
    font-size: 60px;
  }
`;
