import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components/macro';
import { percentageContext } from '../ScrollRangePercent';

export const Wrapper = styled.div`
  /* position: fixed;
  top: 0; */
  /* background-color: red; */
  /* width: 100%;
  height: 100%; */
`;

interface props {
  children: React.ReactNode;
  startAtPercent?: number;
  endAtPercent?: number;
}

export const ElemStyleAnim: React.FC<props> = ({
  children,
  startAtPercent = 0,
  endAtPercent = 1,
}) => {
  const scrollPercent = useContext(percentageContext);
  const WrapperElem = useRef<HTMLDivElement>(null!);

  const [newPercent, setNewPercent] = useState(0);

  useEffect(() => {
    const asd =
      (scrollPercent - startAtPercent) / (endAtPercent - startAtPercent);
    if (asd < 0) setNewPercent(0);
    else if (asd >= 1) setNewPercent(1);
    else setNewPercent(asd);
  }, [scrollPercent, endAtPercent, startAtPercent]);

  // console.log(scrollPercent, ' => ', newPercent);

  return (
    <Wrapper
      ref={WrapperElem}
      style={{
        // ...style,
        // opacity: newPercent,

        // transform: ` translateX(${-80 * (1 - newPercent)}%) translateZ(${
        //   160 * (1 - newPercent)
        // }px) rotateY(${180 * (1 - newPercent)}deg)`,
        // transformOrigin: `${100 * (1 - newPercent)}% ${
        //   50 * (1 - (1 - newPercent))
        // }%`,

        // transform: `translateY(${-350 * (1 - newPercent)}px) translateZ(${
        //   -150 * (1 - newPercent)
        // }px) rotateX(${-90 * (1 - newPercent + 0.2)}deg)`,
        // transformOrigin: 'bottom center',

        transform: `rotateX(${-100 * (1 - newPercent)}deg)`,
        transformOrigin: 'top',
        opacity: newPercent,
      }}
    >
      {children}
    </Wrapper>
  );
};

//  @keyframes swing-in-top-fwd {
//   0% {
//     transform: `rotateX(${-100 *(1 -newPercent)}deg)`;
//     transform-origin: top;
//     opacity: 0;
//   }
//   100% {
//     transform: rotateX(0deg);
//     transform-origin: top;
//     opacity: 1;
//   }
// }
