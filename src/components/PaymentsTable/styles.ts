import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  margin-top: 65px;
  width: 100%;
  background-color: ${mixins.colors.shape};
  padding: 30px;
`;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 8px;

  th {
    color: ${mixins.colors.text};
    font-size: 20px;
    font-weight: 700;
    text-align: left;
  }

  td {
    border: 0;
    color: ${mixins.colors.text};
    font-weight: 500;
    font-size: 18px;
    text-align: left;
  }
`;