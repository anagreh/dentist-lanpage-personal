import styled from 'styled-components';

export const SecSectionContainer = styled.section`
  /* background-color: red; */
  position: relative;

  padding-bottom: 3em;

  min-height: 20em;

  display: flex;
  gap: 1em;
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`;
