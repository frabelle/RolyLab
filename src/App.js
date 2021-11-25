import MuithemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import theme from './components/tools/Theme';
import RegistrarExamen from './components/exams/Registrar';
import ListarExamen from './components/exams/Lista'
import Form from './pages/FormInsert'

function App() {
  return (
    <MuithemeProvider theme={theme}>
      <h1 style={{textAlign:"center"}}></h1>
      
      <RegistrarExamen/>
    </MuithemeProvider>
  );
}

export default App;