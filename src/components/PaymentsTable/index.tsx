import React from 'react';

import { Container, Table } from './styles';

export function PaymentsTable(){
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Titulo</th>
            <th>Data</th>
            <th>Valor</th>
            <th>Pago</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Claudia</td>
            <td>Professor 1</td>
            <td>23 Jun 2020</td>
            <td>R$ 100,00</td>
            <td>V</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};