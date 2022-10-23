import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  flex: 1;
`;

export const Body = styled.div`
  padding: 80px;
`;

export const Content = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .addButton {
    max-width: 333px;
    font-weight: 500;
    background: ${mixins.colors.secondary};
  }
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 36px;
  color: ${mixins.colors.text};
`;