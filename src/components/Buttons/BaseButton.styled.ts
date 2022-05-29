import styled from 'styled-components';

export const BaseButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.color.secondary_color};
  font-size: 1.5em;
  padding: 0.4em 1.5em;

  border-radius: 0.4em;
  border: none;
  cursor: pointer;

  font-family: ${({ theme }) => theme.typography.bold};
`;
