import MuithemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import theme from './components/tools/Theme';
import RegistrarExamen from './components/exams/Registrar';
import ListarExamen from './components/exams/Lista'

function App() {
  return (
    <MuithemeProvider theme={theme}>
      <h1 style={{textAlign:"center"}}>Bienvenidos a ROLY</h1>
      <RegistrarExamen />
      <ListarExamen/>
    </MuithemeProvider>
  );
}

export default App;