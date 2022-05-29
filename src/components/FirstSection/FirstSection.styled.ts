import styled from 'styled-components/macro';

export const ImgContainer = styled.div`
  flex-shrink: 0;
  flex-basis: 24rem;
  box-shadow: ${({ theme }) => theme.shadow.light};

  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 2em;

  background-color: ${({ theme }) => theme.color.secondary_color};

  h1 {
    font-size: 2.5em;
    margin-bottom: 0.5em;
  }
  p {
    font-size: 1em;
    margin-bottom: 0.2em;
  }
`;
export const CardFirstSectionContainer = styled.div`
  display: flex;
  min-height: 20em;

  margin: 3em;
  /* border: 1em solid red; */
  border-radius: 1em;
  box-shadow: ${({ theme }) => theme.shadow.light};

  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    height: auto;
    margin: 1em;
  } ;
`;

export const FirstSectionContainer = styled.section`
  position: relative;
  overflow: hidden;

  /* padding: 3em; */
  /* background-color: gray; */
`;
