import styled from 'styled-components';

export const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;

  height: 5em;
  width: 100%;
  outline: 1px solid #000;
`;

export const SliderContainer = styled.div`
  position: absolute;
  display: flex;

  height: 5em;
  width: 100%;
  outline: 1px solid red;

  /* perspective: 800px;
  perspective-origin: center center; */
`;
export const SliderContainerFront = styled(SliderContainer)`
  z-index: 10;
`;

export const SliderContainerBack = styled(SliderContainer)`
  z-index: -10;
`;

export const TL = styled.div`
  height: 2em;
  width: 50%;
  background-color: #f00;

  z-index: 10;

  /* backface-visibility: hidden;
  transform: rotateY(60deg);
  &:hover {
  } */
`;
export const TR = styled.div`
  height: 2em;
  width: 50%;

  background-color: #00f;
  z-index: 10;
`;
export const BL = styled.div`
  height: 2em;
  width: 50%;
  z-index: -10;

  background-color: #0f0;
`;
export const BR = styled.div`
  height: 2em;
  width: 50%;
  z-index: -10;

  background-color: #ff0;
`;
