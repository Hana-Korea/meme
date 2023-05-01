import { useContext } from 'react';
import * as S from './style';
import { Outlet } from 'react-router-dom';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import { MemeContext } from '../../context/MemeContext';
function Layout() {
  const { isMenuOpen, sestIsMenuOpen } = useContext(MemeContext);
  return (
    <S.Layout>
      {isMenuOpen ? (
        <Sidebar />
      ) : (
        <>
          {' '}
          <Header />
          <Outlet />{' '}
        </>
      )}
    </S.Layout>
  );
}

export default Layout;
