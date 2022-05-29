import styled from 'styled-components';

export const ImgContainer = styled.div`
  flex: 1;

  height: 20em;
  /* overflow: hidden; */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: auto;
    width: 100%;
  }
`;

export const ThirdSectionContainer = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 20em;
  padding: 0 4em;

  background-color: ${({ theme }) => theme.color.secondary_color};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    /* display: inline-block; */
    flex: 1;

    font-size: 1.1em;
    margin-right: 0.5em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & {
      flex-direction: column-reverse;

      padding: 0 0;
    }
    img {
      height: auto;
      width: 100%;
    }

    p {
      font-size: 1.1em;
      flex: 0;

      margin: 1em 0;
    }
  }
`;
