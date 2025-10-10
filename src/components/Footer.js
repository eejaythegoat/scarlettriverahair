import React from 'react';
import SocialLinks from './SocialLinks';

function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-auto">
      <div className="container">
        <SocialLinks className="justify-content-center mb-2" />
        <small>
          &copy; {new Date().getFullYear()} Scarlett Rivera Hair LLC. All rights reserved.
        </small>
      </div>
    </footer>
  );
}

export default Footer;