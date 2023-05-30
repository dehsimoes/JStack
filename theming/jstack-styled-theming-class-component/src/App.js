import React, { useState, useMemo, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Layout from './components/Layout';

import themes from './styles/themes';

class App extends React.Component {
  state = {
    theme: 'dark',
  }

  handleToggleTheme = () => {
    this.setState(prevState => ({ 
      theme: prevState.theme === 'dark' ? 'light' : 'dark'
    }));
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeProvider theme={themes[theme] || themes.dark}>
        <GlobalStyle />
        <Layout 
          onToggleTheme={this.handleToggleTheme} 
          selectedTheme={theme}
        />
      </ThemeProvider>
    );
  }
}

/* function App() {
  const [theme, setTheme] = useState(() => {
    const themeStore = localStorage.getItem('theme');
    return themeStore !== null ? localStorage.getItem('theme') : 'dark';
  });

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark;
  }, [theme]);

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Layout 
        onToggleTheme={handleToggleTheme} 
        selectedTheme={theme}
      />
    </ThemeProvider>
  );
};
*/

export default App;