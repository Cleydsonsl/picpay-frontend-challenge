import styled from 'styled-components';
import { mixins } from '../../styles/mixins';

export const Container = styled.input`
  width: 100%;
  height: 48px;
  padding: 18px 16px;

  font-size: 16px;
  font-family: ${mixins.fonts.regular};

  color: ${mixins.colors.text};
  background: ${mixins.colors.background};
  border-radius: 5px;
  border: solid 2px ${mixins.colors.border};

  margin-bottom: 20px;

  ::placeholder {
    color: ${mixins.colors.text_light};
  }
`;