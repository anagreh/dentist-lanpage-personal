import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';

const flexSBC = () => css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-height: 100%;
`;

export const NavContainer = styled.nav`
  position: relative;

  font-family: 'Alex Brush', cursive, 'Ubuntu';
  font-weight: 100;

  background-color: ${({ theme }) => theme.navbar.backgroundColor};
  box-shadow: 0px -5px 16px 10px rgba(0, 0, 0, 0.25);

  min-width: ${({ theme }) => theme.breakpoints.mobileS};

  z-index: 1000;
`;

export const TopContainer = styled.div`
  ${flexSBC}

  height:${({ theme }) => theme.navbar.height};
  padding: 0px 1em;

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 0px 3em;
  }
`;

export const FlexWrapper = styled.div<{ gap: string }>`
  ${flexSBC}

  gap: ${({ gap }) => gap};
`;

export const ImgWrapper = styled.div`
  flex-shrink: 0;

  height: ${({ theme }) => theme.navbar.height};
  overflow: hidden;

  display: flex;
  place-items: center;

  img {
    height: calc(${({ theme }) => theme.navbar.height} * 1.2);
  }
`;

export const NavLinkList = styled.ul`
  ${flexSBC}

  gap: 2em;

  margin: 0;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  } ;
`;

export const NavLinkItem = styled.li`
  list-style: none;
  width: max-content;
`;
export const NavLink = styled(Link)`
  display: inline-block;
  text-align: center;
  color: inherit;
  text-decoration: inherit;
  width: 100%;

  cursor: pointer;
`;

export const PhoneWrapper = styled.div`
  ${flexSBC}

  gap: 0.5em;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  } ;
`;

export const ExpandButton = styled.button`
  border: none;

  background-color: transparent;

  cursor: pointer;
  @media ${({ theme }) => theme.devices.tablet} {
    display: none;
  } ;
`;

export const ExpandableContainer = styled.div<{
  height: number;
  isExpanded: boolean;
}>`
  width: 100%;

  height: ${(props) => (props.isExpanded ? `${props.height}px` : `0`)};

  transition: height 0.5s ease;

  overflow: hidden;

  @media ${({ theme }) => theme.devices.tablet} {
    height: 0;
  } ;
`;
export const NavLinkListExpanded = styled.ul`
  /* display: flex;
  flex-direction: column; */

  margin: 0;
  padding: 0;
`;
export const NavLinkItemExpanded = styled(NavLinkItem)`
  width: 100%;

  transition: height 0.5s ease-in;

  a {
    padding: 1em;
  }
  &:hover {
    background-color: ${({ theme }) => theme.color.highlight};
  }
`;
