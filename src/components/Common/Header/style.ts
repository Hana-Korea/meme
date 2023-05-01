import styled from 'styled-components';

export const Header = styled.header`
  color: ${({ theme }) => theme.palette.white};
  font-size: ${({ theme }) => theme.fontSize.subtitle};
  font-family: 'EF_jejudoldam';
  position: absolute;
  right: 0;
  width: 100%;
  text-align: end;
  padding: 0 20px 0;
  margin-top: 60px;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title};
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.palette.white};
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.palette.hotPink};
  }
  &:visited {
    color: ${({ theme }) => theme.palette.white};
  }
`;

export const ToggleBtn = styled.button`
  background: transparent;
  border: none;
`;
