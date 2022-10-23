import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: ${mixins.colors.background};
`;

export const Login = styled.div`
  width: 33%;
`;

export const Brand = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${mixins.colors.shape};

  img {
    max-height: 943px;
  }
`