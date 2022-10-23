import React from 'react';
import Modal from 'react-modal';
import { Input } from '../Input';

import { Container, Title } from './styles';

interface OpenModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewPaymentModal({isOpen, onRequestClose}: OpenModal){
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container>
        <Title>Adicionar pagamento</Title>
        <Input placeholder='Usuario'/>
        <Input placeholder='Data'/>
        <Input placeholder='Valor'/>
        <Input placeholder='Titulo'/>
      </Container>
    </Modal>
  );
};