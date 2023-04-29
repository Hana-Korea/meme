import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <S.Header>
      {' '}
      <S.Title>Meme Stream</S.Title> <S.Link to='/login'>로그인</S.Link> |{' '}
      <S.Link to='/signUp'>회원가입</S.Link>
    </S.Header>
  );
}

export default Header;
