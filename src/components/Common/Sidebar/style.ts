import styled, { keyframes, css } from 'styled-components';
import { RxCross2 } from 'react-icons/rx';

const toggleMenu = keyframes`
from{opacity:0} 
to {  opacity: 1}`;

export const Nav = styled.nav`
  width: 100%;
  height: 100vh;
  color: black;
  background: ${({ theme }) => theme.palette.white};
  padding: 0 30px;
  animation: ${({ toggle }) =>
    toggle
      ? css`
          ${toggleMenu} 1s linear forwards
        `
      : css`
          ${toggleMenu} 1s linear forwards
        `};
`;

export const Category = styled.ul`
  height: 100vh;
  position: absolute;
  top: 30%;
`;

export const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  margin-top: 30px;
`;

export const Link = styled.a`
  &:hover {
    color: ${({ theme }) => theme.palette.hotPink};
  }
`;
export const StyledRxCross2 = styled(RxCross2)`
  position: absolute;
  top: 10px;
  right: 10px;
`;
