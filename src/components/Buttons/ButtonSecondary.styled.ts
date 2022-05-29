import styled from 'styled-components';
import { BaseButtonStyled } from './BaseButton.styled';

export const ButtonSecondary = styled(BaseButtonStyled)`
  outline: 0.1em solid ${({ theme }) => theme.color.secondary_color};
  outline-offset: -0.1em;

  background-color: transparent;
  color: ${({ theme }) => theme.color.secondary_color};
`;
