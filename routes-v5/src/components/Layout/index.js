import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import Header from '../Header';

import Routes from '../../Routes';

import { Nav } from './styles'

export default function Layout({ 
  onToggleTheme, selectedTheme 
}) {
  return (
    <BrowserRouter>
      <Header 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme}
      />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/posts/1234567">Post</Link>
      </Nav>

      <Routes />
   {/*    <Footer 
        onToggleTheme={onToggleTheme}
        selectedTheme={selectedTheme} 
      /> */}
    </BrowserRouter>
  );
}
