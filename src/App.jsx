import MuithemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import theme from './components/tools/Theme';
import RegistrarExamen from './components/exams/Registrar';
import AsignarExamen from './components/exams/Asignar';
import RegistrarPerfil from './components/profiles/Registrar'
import ListarPerfil from './components/profiles/Listar'
import RegistrarCategoria from './components/category/Registrar'
import ListarExamen from './components/exams/Lista'
import ListarCategoria from './components/category/Listar'
import Form from './components/menu/sidebar'
import Test from './pages/text'

function App() {
  return (
    <MuithemeProvider theme={theme}>
      <Form/>
      <RegistrarExamen/>
      <AsignarExamen/>
      <ListarExamen/>

      <RegistrarPerfil/>
      <ListarPerfil/>
      
      <RegistrarCategoria/>
      <ListarCategoria/>
    </MuithemeProvider>
  );
}

export default App;