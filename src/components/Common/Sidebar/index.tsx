import * as S from './style';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { MemeContext } from '../../../context/MemeContext';

function Sidebar() {
  const { isMenuOpen, setIsMenuOpen } = useContext(MemeContext);
  const CloseBtn = () => {
    return (
      <IconContext.Provider value={{ color: 'black' }}>
        <S.StyledRxCross2
          onClick={() => {
            setIsMenuOpen(false);
          }}
          size={30}
          style={{ cursor: 'pointer' }}
        />
      </IconContext.Provider>
    );
  };
  return (
    <S.Nav>
      <S.Category>
        <S.Subtitle>오늘의 감정</S.Subtitle>
        <S.Link to='/happy'>
          <li>Happy</li>
        </S.Link>
        <S.Link to='excited'>
          <li> Excited</li>
        </S.Link>
        <S.Link to='/relaxed'>
          <li> Relaxed</li>
        </S.Link>
        <S.Link to='/bored'>
          <li> Bored</li>
        </S.Link>
        <S.Link to='/sad'>
          <li> Sad</li>
        </S.Link>
        <S.Link to='/tired'>
          <li> Tired</li>
        </S.Link>
        <S.Link to='/angry'>
          <li> Angry</li>
        </S.Link>{' '}
        <S.Subtitle> 오늘의 일기</S.Subtitle>
      </S.Category>{' '}
      <CloseBtn />{' '}
    </S.Nav>
  );
}

export default Sidebar;
