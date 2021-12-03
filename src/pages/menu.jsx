import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Index from '../pages/index'

import Login from '../pages/index'

import RegistrarPaciente from '../components/paciente/Registrar'
import RegistrarDoctores from '../components/medicos/Registrar'
import RegistrarValoresNormales from '../components/valnormalesexam/Registrar'
import RegistrarExamen from '../components/exams/Registrar'
import AsignarExamen from '../components/exams/Asignar'
import RegistrarPerfil from '../components/profiles/Registrar'
import RegistrarCategoria from '../components/category/Registrar'
import RegistrarNacionalidad from '../components/nacionalidad/Registrar'
import RegistrarDepartamento from '../components/departamento/Registrar'
import RegistrarPais from '../components/pais/Registrar'
import RegistrarReligion from '../components/religion/Registrar'
import RegistrarProfesiones from '../components/profesiones/Registrar'

import ListarNacionalidad from '../components/nacionalidad/Lista'
import ListarDepartamento from '../components/departamento/Lista'
import ListarMedico from '../components/medicos/Lista'
import ListarPaciente from '../components/paciente/Lista'
import ListarPais from '../components/pais/Lista'
import ListarReligion from '../components/religion/Lista'
import ListarProfesiones from '../components/profesiones/Lista'
import ListarValoresNormales from '../components/valnormalesexam/Lista'
import ListarAsignacion from '../components/exams/ListaAsignacion'
import ListarPerfil from '../components/profiles/Listar'
import ListarExamen from '../components/exams/Lista'
import ListarCategoria from '../components/category/Listar'

import Sidebar from '../components/menu/sidebar'
import Toolbar from '../components/menu/toolbar'
import { DashboardNavbar } from '../components/menu/topbar';
import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom';

const drawerWidth = 240;

function ResponsiveDrawer() {

  return (
    <Box sx={{ display: 'flex' }}>
      
      <DashboardNavbar/>

      <Router>
          <Sidebar position="static"/>

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 1 }}
        >

          <Toolbar/>

          <Switch>
                <Route exact path="/pages/index" element={<Index/>}></Route>
                <Route exact path="/pages/index" element={<Login/>}></Route>

                <Route exact path="/paciente/Registrar" element={<RegistrarPaciente/>}></Route>
                <Route exact path="/medicos/Registrar" element={<RegistrarDoctores/>}></Route>
                <Route exact path="/valnormalesexam/Registrar" element={<RegistrarValoresNormales/>}></Route>
                <Route exact path="/exams/Registrar" element={<RegistrarExamen/>}></Route> 
                <Route exact path="/exams/Asignar" element={<AsignarExamen/>}></Route> 
                <Route exact path="/profiles/Registrar" element={<RegistrarPerfil/>}></Route> 
                <Route exact path="/category/Registrar" element={<RegistrarCategoria/>}></Route> 
                <Route exact path="/nacionalidad/Registrar" element={<RegistrarNacionalidad/>}></Route> 
                <Route exact path="/departamento/Registrar" element={<RegistrarDepartamento/>}></Route> 
                <Route exact path="/pais/Registrar" element={<RegistrarPais/>}></Route> 
                <Route exact path="/religion/Registrar" element={<RegistrarReligion/>}></Route> 
                <Route exact path="/profesiones/Registrar" element={<RegistrarProfesiones/>}></Route> 

                <Route exact path="/departamento/Lista" element={<ListarDepartamento/>}></Route>
                <Route exact path="/pais/Lista" element={<ListarPais/>}></Route>
                <Route exact path="/religion/Lista" element={<ListarReligion/>}></Route>
                <Route exact path="/nacionalidad/Lista" element={<ListarNacionalidad/>}></Route>
                <Route exact path="/profesiones/Lista" element={<ListarProfesiones/>}></Route>
                <Route exact path="/valnormalesexam/Lista" element={<ListarValoresNormales/>}></Route>
                <Route exact path="/exams/ListaAsignacion" element={<ListarAsignacion/>}></Route> 
                <Route exact path="/exams/Lista" element={<ListarExamen/>}></Route> 
                <Route exact path="/profiles/Listar" element={<ListarPerfil/>}></Route> 
                <Route exact path="/category/Listar" element={<ListarCategoria/>}></Route> 
                <Route exact path="/paciente/Lista" element={<ListarPaciente/>}></Route>
                <Route exact path="/medicos/Lista" element={<ListarMedico/>}></Route>
                
              </Switch> 
        </Box>
      </Router>
      
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
