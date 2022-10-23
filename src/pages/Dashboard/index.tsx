import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { NewPaymentModal } from '../../components/NewPaymentModal';
import { PaymentsTable } from '../../components/PaymentsTable';

import { Body, Container, Content, Title } from './styles';

Modal.setAppElement('#root');

export function Dashboard(){
  const [ isNewPaymentModalOpen, setIsNewPaymentModalOpen ] = useState(false);

  function handleOpenNewPaymentModal() {
    setIsNewPaymentModalOpen(true);
  }
  
  function handleCloseNewPaymentModal() {
    setIsNewPaymentModalOpen(false);
  }

  return (
    <Container>
      <Header/>
      <NewPaymentModal
        isOpen={isNewPaymentModalOpen}
        onRequestClose={handleCloseNewPaymentModal}
      ></NewPaymentModal>
      <Body>
        <Content>
          <Title>Meus pagamentos</Title>
          <Button 
            className='addButton' 
            title='ADICIONAR PAGAMENTO' 
            onClick={handleOpenNewPaymentModal}
          />
        </Content>
        <PaymentsTable/>
      </Body>
    </Container>
  );
};