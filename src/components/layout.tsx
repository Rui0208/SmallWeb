// src/components/layout/Layout.tsx
import React from 'react';
import Nav from './Nav';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
