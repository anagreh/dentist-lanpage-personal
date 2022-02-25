import React, { useEffect, useRef, useState } from 'react';
import { Wrapper } from './Wrapper.styled';

interface props {
  hStartOffset?: number;
  hEndOffsetExtra?: number;
  height?: string;
  setPercentage: React.Dispatch<React.SetStateAction<number>>;
  offsetMaxChild?: boolean;
}

interface IData {
  hStartOffset: number; //? height from top of wrapper to 'start transition position'
  hEndOffset: number; //? height from bottom of wrapper to 'stop transition position'
  yStart: number; //? height from top of page to 'start transition position'
  yEnd: number; //? height from top of page to 'stop transition position'
}

export const ScrollRangePercent: React.FC<props> = ({
  hStartOffset = 0,
  hEndOffsetExtra = 0,
  height = '100%',
  setPercentage,
  children,
  offsetMaxChild = false,
}) => {
  const wrapperDom = useRef<HTMLDivElement>(null!);

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
    const handleData: ResizeObserverCallback = () => {
      let hOffsetEndChild = 0;
      // FIXME:
      // if (offsetMaxChild) {
      //   wrapperDom.current.childNodes.forEach((child) => {
      //     const divChild = child as HTMLElement;
      //     console.log(divChild.scrollHeight);

      //     if (divChild.scrollHeight > hOffsetEndChild)
      //       hOffsetEndChild = divChild.scrollHeight;
      //   });
      // }

      // all value in px
      // const hStartOffset = hStartOffset;
      const hEndOffset = hStartOffset + hEndOffsetExtra + hOffsetEndChild;
      const yStart = wrapperDom.current.offsetTop - hStartOffset;
      const yEnd =
        wrapperDom.current.offsetTop +
        wrapperDom.current.scrollHeight -
        hEndOffset;

      // const yContainer = scrollY + containerRect.y; //? it always the value from top of the page to top of container

      setData({
        hStartOffset: hStartOffset,
        hEndOffset: hEndOffset,
        yStart: yStart > 0 ? yStart : 0,
        yEnd: yEnd > yStart ? yEnd : yStart,
      });
    };

    const wrapperObserver = new ResizeObserver(handleData);

    wrapperObserver.observe(wrapperDom.current);

    return () => {
      wrapperObserver.disconnect();
    };
  }, [hEndOffsetExtra, hStartOffset, offsetMaxChild]);

  useEffect(() => {
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
      {children}
    </Wrapper>
  );
};

export default ScrollRangePercent;
