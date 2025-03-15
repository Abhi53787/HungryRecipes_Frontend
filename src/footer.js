import React from 'react';

function Footer() {
    //create the footer content using data-testid="footer-content"
    return (
        <footer className="bg-dark text-white text-center py-3" data-testid="footer-content">
        <p>© Copywrite 2024</p>
      </footer>
  
    );
}

export default Footer;