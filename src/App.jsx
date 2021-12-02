import MuithemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import theme from './components/tools/Theme';
import Sidebar from './pages/menu'

function App() {
  return (
    <MuithemeProvider theme={theme}>
      <Sidebar/>
    </MuithemeProvider>
  );
}

export default App;