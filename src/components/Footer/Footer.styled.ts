import styled from 'styled-components';

export const Contact = styled.div`
  /* flex: 1; */
`;

export const SMIcon = styled.ul`
  padding: 0;
  margin: 0;
  margin-top: 1em;

  li {
    display: inline-block;
    list-style: none;
    padding: 0 0.5em;
  }
  a {
    display: block;
    line-height: 0;
  }

  svg {
    color: ${({ theme }) => theme.color.secondary_color};
    font-size: 1.5em;
  }
`;

export const AboutUs = styled.div`
  /* flex: 1; */

  width: 30%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: auto;
  }
`;

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;

  & > * {
    margin: 1.5em 0em;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;
