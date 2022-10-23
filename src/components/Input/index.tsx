import React from 'react';
import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface Props extends InputHTMLAttributes<any> {};

export function Input({...rest}: Props){
  return (
    <Container {...rest} />
  );
};