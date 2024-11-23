import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-3 text-center">
      <p className="mb-0">&copy; 2024 Novi Diana Ningsih. All rights reserved.</p>
      <p className="mb-0">Follow me: 
        <a 
          href="https://www.instagram.com/nvidianangsh" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white ms-2"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a 
          href="mailto:nvidianangsh26@googl.com" 
          className="text-white ms-2"
        >
          <i className="bi bi-envelope"></i>
        </a>
      </p>
    </footer>
  );
}

export default Footer;
