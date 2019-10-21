import styled from 'styled-components';

export const ProjectWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400&display=swap');
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
`;

export const CardWrapper = styled.div`
  width: 350px;
  height: 200px;
  overflow: hidden;
  margin: 20px;
  position: relative;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;

  &:hover .content {
    top: 0;
    left: 0;
    transform: rotate(0deg);
    a {
      right: 0;
      transition-delay: 400ms;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }

  .content {
    width: 350px;
    height: 200px;
    position: absolute;
    background: rgba(255, 255, 255, 0.9);
    left: -100%;
    top: -100%;
    transition: all 200ms linear;
    transform: rotate(90deg);
    font-weight: 300;
    h2 {
      margin: 20px 0;
      text-align: center;
    }
    div {
      font-size: 14px;
      margin: 10px;
      line-height: 2;
      text-align: center;
    }
    a {
      position: absolute;
      left: 0;
      text-align: center;
      padding: 8px;
      color: #000;
      width: 100px;
      border: solid #000 1px;
      border-radius: 5px;
      margin: 0 auto;

      &:hover {
        font-size: scale(1.5);
      }
    }
  }
`;
