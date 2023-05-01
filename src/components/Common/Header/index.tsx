import { useContext, useState } from 'react';
import * as S from './style';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { MemeContext } from '../../../context/MemeContext';
import Meme from '../../../pages/Meme';
import Sidebar from '../Sidebar';
function Header() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MemeContext);
  return (
    <S.Header>
      <IconContext.Provider value={{ color: '#fff' }}>
        <RxHamburgerMenu
          onClick={() => {
            setIsMenuOpen(true);
          }}
          size={30}
          style={{
            position: 'absolute',
            top: '50px',
            left: '20px',
            cursor: 'pointer',
          }}
        />{' '}
      </IconContext.Provider>

      <div>
        {' '}
        <S.Title>Meme Stream</S.Title> <S.Link to='/login'>로그인</S.Link> |{' '}
        <S.Link to='/signUp'>회원가입</S.Link>{' '}
      </div>
    </S.Header>
  );
}

export default Header;

// 로그인된 상태면 로그아웃 | 마이페이지로 수정필요함

// function HamburgerMenu({ isMenuOpen, setIsMenuOpen }) {
//   return (

//   );
// }
