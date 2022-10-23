import React from 'react';

import brandImg from '../../assets/brand.svg'
import { Input } from '../../components/Input';

import { Container, Brand, Login } from './styles';

export function SignIn(){
  return (
    <Container>
      <Login>
        <Input placeholder='Email'></Input>
        <Input placeholder='Senha'></Input>
      </Login>
      <Brand>
        <img src={brandImg} alt="brand" />
      </Brand>
    </Container>
  );
};