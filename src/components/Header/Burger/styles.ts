import styled from 'styled-components';

interface BurgerProps {
  open: boolean;
}

export const StyledBurger = styled.div<BurgerProps>`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 30px;
  right: 20px;

  z-index: 30;
  display: none;

  @media (max-width: 930px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;

    z-index: 9999;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#ccc' : '#fff')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
