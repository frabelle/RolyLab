import MuithemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import theme from './components/tools/Theme';
import Sidebar from './pages/menu'
import ListarPais from './components/pais/Lista';
import ListarDepartamento from './components/departamento/Lista';
import ListarProfesion from './components/profesiones/Lista';
import ListarReligion from './components/religion/Lista';
import ListarValoresnormales from './components/valnormalesexam/Lista';
import ListarMedico from './components/medicos/Lista';
import ListarPaciente from './components/paciente/Lista';

function App() {
  return (
    <MuithemeProvider theme={theme}>
      <Sidebar/>
      <ListarDepartamento/>
      <ListarPais/>
      <ListarProfesion/>
      <ListarReligion/>
      <ListarValoresnormales/>
      <ListarMedico/>
      <ListarPaciente/>
      
    </MuithemeProvider>
  );
}

export default App;