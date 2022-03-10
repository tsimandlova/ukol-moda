import React from 'react';
import './style.css';

const Footer = ({ year, author }) => {
  return (
    <footer className="footer">
      <p className="footer__copyright">&copy; {year}, {author}</p>
      <p className="footer__disclosure">Oblečení nesnášíme a na našich službách je to znát. Muck.</p>
    </footer>
  );
};

export default Footer;