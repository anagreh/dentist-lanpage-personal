import React, { useContext, useEffect, useRef, useState } from 'react';
import styled, {
  css,
  FlattenSimpleInterpolation,
  keyframes,
} from 'styled-components/macro';
import { percentageContext } from '../ScrollRangePercent';

export const Wrapper = styled.div<{
  isAnimationStart: boolean;
  animationIn: FlattenSimpleInterpolation;
  animationOut: FlattenSimpleInterpolation;
}>`
  ${({ isAnimationStart, animationIn, animationOut }) =>
    isAnimationStart ? animationIn : animationOut}
`;

interface props {
  children: React.ReactNode;
  toggleAt?: number;
  animationIn: FlattenSimpleInterpolation;
  animationOut: FlattenSimpleInterpolation;
}

export const ToggleAnimAtPercent: React.FC<props> = ({
  children,
  toggleAt = 0,
  animationIn,
  animationOut,
}) => {
  const scrollPercent = useContext(percentageContext);
  const WrapperElem = useRef<HTMLDivElement>(null!);
  const [isAnimationStart, setIsAnimationStart] = useState(false);

  useEffect(() => {
    if (scrollPercent > toggleAt) setIsAnimationStart(true);
    // WrapperElem.current.style.animationDirection = '';
    else setIsAnimationStart(false);
    //  WrapperElem.current.style.animationDirection = 'reverse';
  }, [scrollPercent, toggleAt]);

  return (
    <Wrapper
      ref={WrapperElem}
      isAnimationStart={isAnimationStart}
      animationIn={animationIn}
      animationOut={animationOut}
    >
      {children}
    </Wrapper>
  );
};
