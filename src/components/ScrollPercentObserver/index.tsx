import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useLayoutEffect,
} from 'react';
import { Wrapper } from './Wrapper.styled';

export const percentageContext = createContext(0);

interface props {
  hStartOffset?: number;
  hEndOffsetExtra?: number;
  height?: string;
  offsetMaxChild?: boolean;
  forwards?: boolean;
  style?: React.CSSProperties;
}

interface IData {
  hStartOffset: number; //? height from top of wrapper to 'start transition position'
  hEndOffset: number; //? height from bottom of wrapper to 'stop transition position'
  yStart: number; //? height from top of page to 'start transition position'
  yEnd: number; //? height from top of page to 'stop transition position'
}

export const ScrollPercentFromTop: React.FC<props> = ({
  hStartOffset = 0,
  hEndOffsetExtra = 0,
  height = '100%',
  children,
  offsetMaxChild = false,
  forwards = false,
  style,
}) => {
  const wrapperDom = useRef<HTMLDivElement>(null!);

  const [scrollY, setScrollY] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [data, setData] = useState<IData>({
    hStartOffset: 0,
    hEndOffset: 0,
    yStart: 0,
    yEnd: 1,
  });

  //TODO: add intersection observer so that handle scroll will not listen to scroll until the viewport is near the yStart or yEnd
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useLayoutEffect(() => {
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
      const rect = wrapperDom.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      const hEndOffset = hStartOffset + hEndOffsetExtra + hOffsetEndChild;
      // const yStart = wrapperDom.current.offsetTop - hStartOffset;
      const yStart = rect.top + scrollTop - hStartOffset;
      const yEnd =
        rect.top + scrollTop + wrapperDom.current.scrollHeight - hEndOffset;

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
      if (forwards) {
        if (percentage >= 1) setScrollPercent(1);
        else
          setScrollPercent((oldPercentage) =>
            oldPercentage > percentage ? oldPercentage : percentage,
          );
      } else {
        if (percentage >= 1) setScrollPercent(1);
        else if (percentage <= 0) setScrollPercent(0);
        else if (percentage) setScrollPercent(percentage);
      }
    };

    handlePercentage((scrollY - data.yStart) / (data.yEnd - data.yStart));
  }, [data, forwards, scrollY]);

  return (
    <percentageContext.Provider value={scrollPercent}>
      <Wrapper style={style} ref={wrapperDom} height={height}>
        {/* the area that container will move in */}
        {children}
      </Wrapper>
    </percentageContext.Provider>
  );
};

export default ScrollPercentFromTop;
