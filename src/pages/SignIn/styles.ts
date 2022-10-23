import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: ${mixins.colors.background};
`;

export const Login = styled.div`
  width: 40%;
  padding: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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