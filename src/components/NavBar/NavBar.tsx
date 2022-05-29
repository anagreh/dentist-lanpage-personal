import React, { useEffect, useRef, useState } from 'react';
import {
  NavContainer,
  ImgWrapper,
  NavLinkList,
  NavLinkItem,
  NavLink,
  PhoneWrapper,
  FlexWrapper,
  ExpandButton,
  ExpandableContainer,
  TopContainer,
  NavLinkItemExpanded,
  NavLinkListExpanded,
} from './NavBar.styled';

import logoPng from '../../assets/image/logo.jpg';
import { FaHamburger, FaPhone, FaTimes } from 'react-icons/fa';

import { Link } from 'react-scroll';

export const NavBar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [height, setHeight] = useState(0);
  const expandableDom = useRef<HTMLUListElement>(null);

  const handleExpandButt = () => {
    setIsExpanded(() => !isExpanded);
  };

  useEffect(() => {
    if (expandableDom.current) {
      setHeight(expandableDom.current.offsetHeight);
    }
  }, []);

  return (
    <NavContainer>
      <TopContainer>
        <FlexWrapper gap="2em">
          <ImgWrapper>
            <img src={logoPng} alt="logo" />
          </ImgWrapper>
          <NavLinkList>
            <NavLinkItem>
              <NavLink
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink
                to="about-us"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                About Us
              </NavLink>
            </NavLinkItem>
            <NavLinkItem>
              <NavLink
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >
                Contact
              </NavLink>
            </NavLinkItem>
          </NavLinkList>
        </FlexWrapper>
        <ExpandButton onClick={handleExpandButt}>
          {isExpanded ? <FaTimes /> : <FaHamburger />}
        </ExpandButton>
        <PhoneWrapper>
          <FaPhone />
          <p>962-70-12345678</p>
        </PhoneWrapper>
      </TopContainer>

      <ExpandableContainer height={height} isExpanded={isExpanded}>
        <NavLinkListExpanded ref={expandableDom}>
          <NavLinkItemExpanded>
            <NavLink to="./">Home</NavLink>
          </NavLinkItemExpanded>
          <NavLinkItemExpanded>
            <NavLink to="./about-us">About Us</NavLink>
          </NavLinkItemExpanded>
          <NavLinkItemExpanded>
            <NavLink to="./contact">Contact</NavLink>
          </NavLinkItemExpanded>
        </NavLinkListExpanded>
      </ExpandableContainer>
    </NavContainer>
  );
};
