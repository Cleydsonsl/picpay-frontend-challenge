import React from 'react';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import brandImg from '../../assets/brand.svg'
import logo from '../../assets/PayFriends.svg';

import { Container, Brand, Login, Title, Logo } from './styles';

export function SignIn(){
  return (
    <Container>
      <Login>
        <Logo src={logo}/>
        <Title>Bem-vindo de volta</Title>
        <Input placeholder='Email'></Input>
        <Input placeholder='Senha'></Input>
        <Button title='ENTRAR'></Button>
      </Login>
      <Brand>
        <img src={brandImg} alt="brand" />
      </Brand>
    </Container>
  );
};