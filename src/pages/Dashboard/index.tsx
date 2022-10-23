import React from 'react';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';

import { Body, Container, Content, Title } from './styles';

export function Dashboard(){
  return (
    <Container>
      <Header/>
      <Body>
        <Content>
          <Title>Meus pagamentos</Title>
          <Button className='addButton' title='ADICIONAR PAGAMENTO' />
        </Content>
      </Body>
    </Container>
  );
};