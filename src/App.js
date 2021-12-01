import MuithemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import theme from './components/tools/Theme';
import RegistrarExamen from './components/exams/Registrar';
import AsignarExamen from './components/exams/Asignar';
import ListarExamen from './components/exams/Lista'
import Form from './pages/FormInsert'
import RegistrarPais from './components/pais/Registrar';
import RegistrarDepartamento from './components/departamento/Registrar';
import RegistrarValnormales from './components/valnormalesexam/Registrar';
import RegistrarProfesion from './components/profesiones/Registrar';
import RegistrarReligion from './components/religion/Registrar';
import RegistrarMedico from './components/medicos/Registrar';
import RegistrarPaciente from './components/paciente/Registrar';

function App() {
  return (
    <MuithemeProvider theme={theme}>
      <h1 style={{textAlign:"center"}}></h1>
      
      <RegistrarPais/>
      <RegistrarDepartamento/>
      <RegistrarValnormales/>
      <RegistrarProfesion/>
      <RegistrarReligion/>
      <RegistrarMedico/>
      <RegistrarPaciente/>

      
    </MuithemeProvider>
  );
}

export default App;