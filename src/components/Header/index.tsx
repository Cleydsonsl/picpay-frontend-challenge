import React from 'react';
import logo from '../../assets/PayFriendsWhite.svg'

import { Container, Logo } from './styles';

export function Header(){
  return (
    <Container>
      <Logo src={logo}/>
    </Container>
  );
};