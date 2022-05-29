import styled from 'styled-components';

export const CardContainer = styled.div`
  font-size: 1em;
  width: 15em;
  min-height: 18em;

  color: ${({ theme }) => theme.color.secondary_color};

  outline: 1px solid gray;
  border-radius: 1em;
  /* height: 100%; */
  img {
    border-radius: 1em;

    width: 100%;
    height: 9em;

    object-fit: cover;
  }

  p {
    font-size: 1.2em;
    text-align: center;
    padding: 1em 0;
  }
`;
