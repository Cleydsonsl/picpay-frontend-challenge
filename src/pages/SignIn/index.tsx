import React from 'react';

import brandImg from '../../assets/brand.svg'

import { Container, Brand, Login } from './styles';

export function SignIn(){
  return (
    <Container>
      <Login/>
      <Brand>
        <img src={brandImg} alt="brand" />
      </Brand>
    </Container>
  );
};