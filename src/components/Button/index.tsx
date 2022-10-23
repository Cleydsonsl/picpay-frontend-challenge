import React from 'react';

import { ButtonHTMLAttributes } from 'react';

import { Container, Title } from './styles';

interface Props extends ButtonHTMLAttributes<any> {
  title: string;
}

export function Button({ title, ...rest }: Props){
  return (
    <Container {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  );
};