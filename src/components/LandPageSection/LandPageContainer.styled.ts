import styled from 'styled-components';

export const LBContainer = styled.section`
  position: relative;
  display: flex;

  background-color: ${({ theme }) => theme.color.primary_color};
  /* min-height: calc(100vh - ${({ theme }) => theme.navbar.height}); */
  /* height: clamp(
    600px,
    calc(100vh - ${({ theme }) => theme.navbar.height}),
    900px
  ); */
  overflow: hidden;
  z-index: 10;
`;

export const SvgContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  height: 100%;
  width: 100%;
  z-index: -10;
  svg {
    height: 102%;
    width: 102%;

    color: ${({ theme }) => theme.color.secondary_color};
  }

  @media (max-width: 1000px) {
    display: none;
  } ;
`;

export const ImgContainer = styled.div`
  position: absolute;

  bottom: 89px;
  right: 168px;
  height: 15em;
  width: 15em;
  transform: rotateZ(24deg);
`;

export const Content = styled.div`
  margin: 5em;

  h1 {
    font-size: 3em;
    margin-bottom: 1em;
  }
  p {
    width: 30em;
    font-size: 1.3em;
  }
  /* background-color: gray; */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 1em;
    margin-top: 3em;
    text-align: center;

    p {
      width: auto;
    }
  } ;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  padding: 0 4em;
  margin-top: 10em;

  gap: 7em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 1em;
    padding: 0 1em;
    margin-top: 5em;
  } ;
`;
