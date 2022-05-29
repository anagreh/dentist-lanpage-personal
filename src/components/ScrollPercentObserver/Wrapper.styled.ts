import styled from 'styled-components/macro';

export const Wrapper = styled.div<{ height?: string; bottom?: boolean }>`
  position: relative;

  height: ${({ height }) => (height ? height : '100%')};
  width: 100%;

  overflow: hidden;

  pointer-events: none;

  /* background-color: red; */
`;
