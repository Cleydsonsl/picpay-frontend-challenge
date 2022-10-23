import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.input`
  width: 100%;
  height: 48px;
  padding: 18px 16px;

  font-size: 16px;
  font-weight: 400;

  color: ${mixins.colors.text};
  background: ${mixins.colors.background};
  border-radius: 10px;
  border: solid 2px ${mixins.colors.border};

  margin-bottom: 15px;
  outline: 0;

  ::placeholder {
    color: ${mixins.colors.text_light};
  }
`;