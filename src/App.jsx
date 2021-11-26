import MuithemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import theme from './components/tools/Theme';
import RegistrarExamen from './components/exams/Registrar';
import AsignarExamen from './components/exams/Asignar';
import RegistrarPerfil from './components/profiles/Registrar'
import RegistrarCategoria from './components/category/Registrar'
import ListarExamen from './components/exams/Lista'
import Form from './pages/sidebar'

function App() {
  return (
    <MuithemeProvider theme={theme}>
      <Form/>
      <RegistrarPerfil/>
      <AsignarExamen/>
      <RegistrarCategoria/>
      <ListarExamen/>
    </MuithemeProvider>
  );
}

export default App;