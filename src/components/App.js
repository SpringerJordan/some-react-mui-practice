import React from 'react';
import Header from '../components/ui/header';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme, styled } from '@mui/material/styles';
import theme from './ui/theme';



function App() {
  return (
    <ThemeProvider theme = {theme}>
      <Header/>
      Hello!
    </ThemeProvider>
  );
}

export default App;
