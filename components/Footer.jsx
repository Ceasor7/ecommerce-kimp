import React from 'react';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p> Kimco Auto Spare parts Limited</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillFacebook />
      </p>
    </div>
  );
};

export default Footer;
