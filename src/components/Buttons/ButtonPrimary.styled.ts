import styled from 'styled-components';
import { BaseButtonStyled } from './BaseButton.styled';

export const ButtonPrimary = styled(BaseButtonStyled)`
  background-color: ${({ theme }) => theme.color.secondary_color};

  color: ${({ theme }) => theme.color.primary_color};
`;
