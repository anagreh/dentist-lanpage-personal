import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AboutUs, Contact, FooterStyled, SMIcon } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterStyled id="contact">
      <Contact>
        <p>
          <FaLocationArrow /> Irbid, kufruba al js main st.
        </p>
        <p>
          <FaPhone /> +962-123456789
        </p>
        <p>
          <FaMailBulk /> emam.almounger@gmail.com
        </p>
        <SMIcon>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://fb.com">
              <FaFacebook />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.Instagram.com"
            >
              <FaInstagram />
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.twitter.com"
            >
              <FaTwitter />
            </a>
          </li>
        </SMIcon>
      </Contact>
      <AboutUs>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </AboutUs>
    </FooterStyled>
  );
};
