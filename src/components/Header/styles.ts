import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.header`
  width: 100%;
  height: 200px;
  padding: 80px;
  background: ${mixins.colors.primary};

  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  max-width: 247px;
`