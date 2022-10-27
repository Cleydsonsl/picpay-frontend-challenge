import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import brandImg from '../../assets/brand.svg'
import logo from '../../assets/PayFriends.svg';

import { Container, Brand, Login, Title, Logo } from './styles';

interface FormData {
  email: string;
  password: string;
}

export function SignIn(){
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = data => {
    if(data.email !== '' || data.password !== '' ) {
      return alert('Email ou senha incorreto')
    }
  };

  function handleRegister(form: FormData) {
    const data = {
      email: form.email,
      password: form.password
    }

    if(data.email === '' || data.password === '' ) {
      return alert('Email ou senha incorreto')
    }
  }

  return (
    <Container>
      <Login onSubmit={handleSubmit(onSubmit)}>
        <Logo src={logo}/>
        <Title>Bem-vindo de volta</Title>
        <Input {...register('email')} placeholder='Email'/>
        <Input {...register('password')} placeholder='Senha'/>
        <Button type='submit' title='ENTRAR'></Button>
      </Login>
      <Brand>
        <img src={brandImg} alt="brand" />
      </Brand>
    </Container>
  );
};