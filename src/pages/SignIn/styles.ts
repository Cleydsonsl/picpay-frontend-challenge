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
`;

export const Title = styled.h1`
  color: ${mixins.colors.text};
  font-size: 36px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;

  margin-bottom: 50px;
`;

export const Logo = styled.img`
  width: 175px;
  margin-bottom: 15px;
`