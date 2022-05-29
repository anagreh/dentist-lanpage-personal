import React, {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components/macro";
import { percentageContext } from "../ScrollRangePercent";

export const HorizontalScrollWrapper = styled.div`
  /* position: fixed;
  top: 0; */
  /* background-color: '#016FBD'; */
  width: 100%;
  height: 100%;
`;

export const HorizontalScrollContent = styled.div`
  /* position: fixed; */
  width: 100%;
  /* background-color: red; */
`;

interface props {
  children: React.ReactNode;
  /** top sticky: after what  */
  topSticky?: number;
  bottomOffset?: number;
}

export const HorizontalScroll: React.FC<props> = ({
  children,
  topSticky = 0,
  bottomOffset = 0,
}) => {
  const scrollPercent = useContext(percentageContext);
  const [ScrollYEnd, setScrollYEnd] = useState(0);

  const handleScroll = useCallback(() => {
    setScrollYEnd(window.scrollY + window.innerHeight);
  }, []);

  useLayoutEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const [style, setStyle] = useState<React.CSSProperties>({
    position: "static",
    bottom: 0,
  });
  const WrapperElem = useRef<HTMLDivElement>(null!);
  const ContentElem = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const wrapperRect = WrapperElem.current.getBoundingClientRect();
    // const contentRect = ContentElem.current.getBoundingClientRect();
    // const WrapperOffsetFromTop = window.pageYOffset + wrapperRect.top;

    if (wrapperRect.y > topSticky) setStyle({ position: "static" });
    else if (
      wrapperRect.bottom - ContentElem.current.offsetHeight <
      topSticky + bottomOffset
    )
      setStyle({
        top:
          WrapperElem.current.scrollHeight -
          ContentElem.current.scrollHeight -
          bottomOffset,
        position: "relative",
      });
    else if (wrapperRect.y <= topSticky)
      setStyle({
        // minBottom : hStartOffset - ContentElem.current.offsetHeight
        // maxBottom: hStartOffset
        top: topSticky,
        position: "fixed",
      });
  }, [scrollPercent, ScrollYEnd, topSticky, bottomOffset]);

  return (
    <HorizontalScrollWrapper ref={WrapperElem}>
      <HorizontalScrollContent
        ref={ContentElem}
        style={{
          ...style,
          // opacity: `${scrollPercent}`,

          // transform: ` translateX(${-80 * (1 - scrollPercent)}%) translateZ(${
          //   160 * (1 - scrollPercent)
          // }px) rotateY(${180 * (1 - scrollPercent)}deg)`,
          // transformOrigin: `${100 * (1 - scrollPercent)}% ${
          //   50 * (1 - (1 - scrollPercent))
          // }%`,
        }}
      >
        {children}
      </HorizontalScrollContent>
    </HorizontalScrollWrapper>
  );
};
