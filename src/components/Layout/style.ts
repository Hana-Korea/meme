import styled from 'styled-components';

export const Layout = styled.div`
  font-family: 'EF_jejudoldam';
  background: ${({ theme }) => theme.palette.black};
  height: 812px;
  width: 375px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  overflow: hidden;
`;
