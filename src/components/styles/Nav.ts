import styled, { keyframes } from 'styled-components';

export const NavStyles = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  .menuBtn {
    position: absolute;
    cursor: pointer;
    padding: 10px 0;
    margin: -5px 0;
    height: 30px;
    width: 30px;
    background-color: transparent;

    .bar {
      display: block;
      width: 20px;
      height: 2px;
      background-color: #fff;
      transition: 0.15s cubic-bezier(0.75, -0.55, 0.25, 1.55);
      margin: 4px;

      &.active {
        margin: 0;
        position: absolute;

        &:nth-child(1) {
          transform: rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
        }
      }
    }
  }

  @media (min-width: 768px) {
    .menuBtn {
      display: none;
    }
  }
`;

const slideDown = keyframes`
  0% { 
    opacity: 0
    transform: translateY(-60px)
  }

  100% {
    opacity: 1
    transform: translateY(0)
  }
`;

export const BurgerNavStyles = styled.ul`
  list-style: none;
  margin: 10px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  transition: background 0.45s linear, max-height 0.35s ease-in 200ms;
  max-height: 0;

  &.open {
    visibility: visible;
    max-height: 200px;
    height: 100%;
  }

  li {
    text-transform: uppercase;
    width: 7rem;
    margin: 20px 0;
    font-size: 1rem;
    padding: 10px;
    background: #ec3c37;
    border-radius: 10px;
    transform-origin: top center;
    animation: ${slideDown} 1s ease-in-out forwards;

    a {
      color: #fff;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    overflow-y: visible;

    li {
      background: transparent;
      margin: 0;
    }
  }
`;
