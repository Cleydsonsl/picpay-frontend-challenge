import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${mixins.colors.shape};

  padding: 80px;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${mixins.colors.text};

  margin-bottom: 66px;
`;

