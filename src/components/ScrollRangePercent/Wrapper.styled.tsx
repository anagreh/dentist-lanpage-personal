import styled from 'styled-components';

export const Wrapper = styled.div<{ height?: string }>`
  position: relative;
  height: ${({ height }) => (height ? height : '100%')};

  overflow: hidden;

  background-color: royalblue;
`;
