import styled from 'styled-components/macro';

export const HomeContainer = styled.div`
  background-color: ${({ theme }) => theme.color.primary_color};
`;

export const SectionContainer = styled.div`
  margin-top: 2em;
  padding: 3em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 1em;
  } ;
`;
