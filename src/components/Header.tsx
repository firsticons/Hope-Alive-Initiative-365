
import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="w-full py-4 px-6 border-b">
      <div className="container mx-auto flex items-center">
        <Logo className="h-12" />
      </div>
    </header>
  );
};

export default Header;
