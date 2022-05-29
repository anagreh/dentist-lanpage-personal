import styled from 'styled-components/macro';

export const LineContainer = styled.div<{ zIndex: number | undefined }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}

  overflow: hidden;
  svg {
    display: inline-block;
    height: 100%;
  }
`;
