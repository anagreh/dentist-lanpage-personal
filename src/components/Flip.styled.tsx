import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 50em;

  background-color: rgba(30, 30, 30, 20%);
`;
// export const Container1 = styled.div<{ transform: number }>`
//   position: absolute;
//   display: flex;

//   transform: ${(props) => `translateY(${props.transform}px)`};
//   height: 5em;
//   width: 100%;
//   outline: 1px solid #000;
// `;
export const Container = styled.div`
  position: sticky;
  top: 7em;
  display: flex;

  height: 5em;
  width: 100%;
  outline: 1px solid #000;
`;
// export const Container = styled.div.attrs<{ transform: number }>((props) => ({
//   style: {
//     transform: `translateY(${props.transform}px)`,
//   },
// }))<{ transform: number }>`
//   position: absolute;
//   display: flex;

//   height: 5em;
//   width: 100%;
//   outline: 1px solid #000;
// `;
export const SliderContainer = styled.div`
  position: absolute;
  display: flex;

  height: 5em;
  width: 100%;
  outline: 1px solid red;
`;

export const TL = styled.div`
  height: 2em;
  width: 50%;
  background-color: #f00;

  z-index: 10;
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
