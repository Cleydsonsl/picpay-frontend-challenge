import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.button`
  width: 100%;
  background: ${mixins.colors.primary};

  padding: 18px;
  border-radius: 5px;
  align-items: center;

`;

export const Title = styled.h3`
  font-family: ${mixins.fonts.bold};
  font-size: 20px;
  color: ${mixins.colors.shape};
`