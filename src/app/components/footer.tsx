/*import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedinIn, faFacebookF, faPinterest, faYelp } from '@fortawesome/free-brands-svg-icons';*/


/*const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="footer-content mb-4"
          <p className="mb-2">Follow Us:</p>
          <div className="social-links flex justify-center space-x-4">
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a 
              href="https://www.instagram.com/fariha_ahson/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a 
              href="https://www.linkedin.com/in/fariha-nizam-7517b812a/?originalSubdomain=pk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100039887306734&ref=page_internal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a 
              href="https://pinterest.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a 
              href="https://www.yelp.com/biz/spersch-studio-sydney" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
            >
              <FontAwesomeIcon icon={faYelp} />
            </a>
          </div>
        </div>
        <p>
          © 2000-2024 The Art Story Foundation. All Rights Reserved | 
          <a href="#" className="text-gray-400 hover:text-white"> Privacy Policy</a> | 
          <a href="#" className="text-gray-400 hover:text-white"> Sitemap</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;*/



import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedinIn, faFacebookF, faPinterest, faYelp } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <div className="footer-content mb-4">
          <p className="mb-2">Follow Us:</p>
          <div className="social-links flex justify-center space-x-4">
            <a 
              href="https://twitter.com/YOUR_USERNAME" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a 
              href="https://www.instagram.com/fariha_ahson/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a 
              href="https://www.linkedin.com/in/fariha-nizam-7517b812a/?originalSubdomain=pk" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100039887306734&ref=page_internal" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a 
              href="https://pinterest.com/YOUR_USERNAME/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faPinterest} />
            </a>
            <a 
              href="https://www.yelp.com/biz/spersch-studio-sydney"  
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white"
            >
              <FontAwesomeIcon icon={faYelp} />
            </a>
          </div>
        </div>
        <p>
          © 2000-2024 The Art Story Foundation. All Rights Reserved | 
          <a href="#" className="text-gray-400 hover:text-white"> Privacy Policy</a> | 
          <a href="#" className="text-gray-400 hover:text-white"> Sitemap</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

