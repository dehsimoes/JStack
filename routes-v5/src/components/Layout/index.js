import React from 'react';

import Header from '../Header';
import Footer from '../Footer';

import Routes from '../../Routes';

export default function Layout({ 
  onToggleTheme, selectedTheme 
}) {
  return (
    <>
      <Header 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <Routes />
      <Footer 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme} 
      />
    </>
  );
}
