import { useContext } from 'react';
import { MemeContext } from '../../context/MemeContext';
import Sidebar from '../../components/Common/Sidebar';
import Layout from '../../components/Layout';
import Header from '../../components/Common/Header';
import MemeList from '../../components/Meme/MemeList';
import * as S from './style';
function Home() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MemeContext);

  return (
    <S.Home>
      {isMenuOpen ? (
        <Sidebar />
      ) : (
        <>
          {' '}
          <Header />
          <MemeList />{' '}
        </>
      )}
    </S.Home>
  );
}

export default Home;
