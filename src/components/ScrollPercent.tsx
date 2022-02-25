import React, { useEffect, useRef, useState } from 'react';

import { Container } from './Flip.styled';
import { Wrapper } from './ScrollRangePercent/Wrapper.styled';

interface props {
  hStartOffset?: number;
  hEndOffsetExtra?: number;
  height?: string;
  setPercentage: React.Dispatch<React.SetStateAction<number>>;
}

interface IData {
  hStartOffset: number;
  hEndOffset: number;
  yStart: number;
  yEnd: number;
}

export const ScrollPercent: React.FC<props> = ({
  hStartOffset = 0,
  hEndOffsetExtra = 0,
  height = '100%',
  setPercentage,
  children,
}) => {
  const wrapperDom = useRef<HTMLDivElement>(null!);
  const containerDom = useRef<HTMLDivElement>(null!);

  const [scrollY, setScrollY] = useState(0);
  const [data, setData] = useState<IData>({
    hStartOffset: 0,
    hEndOffset: 0,
    yStart: 0,
    yEnd: 1,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleData = () => {
      const containerRect = containerDom.current.getBoundingClientRect();

      // all value in px
      // const hStartOffset = hStartOffset; //? height from top of wrapper to 'start transition position'
      const hEndOffset = containerRect.height + hStartOffset + hEndOffsetExtra; //? height from bottom of wrapper to 'stop transition position'
      // TODO: if yStart is negative make it 0 and make sure yEnd is higher than yStart
      const yStart = wrapperDom.current.offsetTop - hStartOffset; //? height from top of page to 'start transition position'
      const yEnd = //? height from top of page to 'stop transition position'
        wrapperDom.current.offsetTop +
        wrapperDom.current.offsetHeight -
        hEndOffset;

      // const yContainer = scrollY + containerRect.y; //? it always the value from top of the page to top of container

      setData({
        hStartOffset: hStartOffset,
        hEndOffset: hEndOffset,
        yStart: yStart,
        yEnd: yEnd,
      });
    };

    handleData();

    window.addEventListener('resize', handleData);

    return () => {
      window.removeEventListener('resize', handleData);
    };
  }, [hEndOffsetExtra, hStartOffset]);

  useEffect(() => {
    containerDom.current.style.top = `${data.hStartOffset}px`;

    const handlePercentage = (percentage: number) => {
      if (percentage >= 1) setPercentage(1);
      else if (percentage <= 0) setPercentage(0);
      else setPercentage(percentage);
    };

    handlePercentage((scrollY - data.yStart) / (data.yEnd - data.yStart));
  }, [data, scrollY, setPercentage]);

  return (
    <Wrapper ref={wrapperDom} height={height}>
      {/* the area that container will move in */}
      <Container ref={containerDom}>
        {/* the container that will stick to screen throw Wrapper height*/}
        {children}
      </Container>
    </Wrapper>
  );
};

export default ScrollPercent;
