import MuithemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import theme from './components/tools/Theme';
import Sidebar from './pages/menu'
import Login from './pages/login'
import Register from './pages/register'
import Index from './pages/index'
import Home from './pages/home'

function App() {
  return (

    <MuithemeProvider theme={theme}>

      <Sidebar/>      
      
    </MuithemeProvider>
  );
}

export default App;