import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  overflow: hidden;
  svg {
    display: inline-block;
    height: 100%;
  }
`;

interface IPros extends React.SVGProps<SVGSVGElement> {}

export const Svg: React.FC<IPros> = (props) => {
  return (
    <Wrapper>
      <svg {...props}>{props.children}</svg>
    </Wrapper>
  );
};
