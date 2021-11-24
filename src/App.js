import MuithemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import theme from './components/tools/Theme';
import RegistrarExamen from './components/exams/Registrar';

function App() {
  return (
    <MuithemeProvider theme={theme}>
      <h1 style={{textAlign:"center"}}>Bienvenidos a ROLY</h1>
      <RegistrarExamen />
    </MuithemeProvider>
  );
}

export default App;