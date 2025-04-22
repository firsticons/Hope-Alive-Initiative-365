
import React from 'react';

const Logo = ({ className = '' }) => {
  return (
    <img 
      src="/lovable-uploads/89c168a4-cb51-43e6-8f41-dc64b2ee1c73.png" 
      alt="Hope Alive Initiative 365 Logo" 
      className={`h-10 w-auto ${className}`}
    />
  );
};

export default Logo;
