import styled from 'styled-components';

export const SocialStyles = styled.nav`
  margin: 30px 0 10px 0;
  a {
    font-size: 1.5rem;
    margin: 0 20px;
    color: #fff;
    background-image: linear-gradient(#fff, #fff);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 1px;
    transition: background-size cubic-bezier(0, 0.5, 0, 1) 0.3s;
    &:hover,
    &:focus {
      background-size: 100% 1px;
    }
  }
`;
