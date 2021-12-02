import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import RegistrarExamen from '../components/exams/Registrar';
import AsignarExamen from '../components/exams/Asignar';
import RegistrarPerfil from '../components/profiles/Registrar'
import ListarPerfil from '../components/profiles/Listar'
import RegistrarCategoria from '../components/category/Registrar'
import ListarExamen from '../components/exams/Lista'
import ListarCategoria from '../components/category/Listar'
import Sidebar from '../components/menu/sidebar'
import Toolbar from '../components/menu/toolbar'
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';

const drawerWidth = 240;

function ResponsiveDrawer() {

  return (
    <Box sx={{ display: 'flex' }}>
      
      <Router>
          <Sidebar position="static"/>

        <Box
          component="main"
          sx={{ flexGrow: 1, p: 1 }}
        >
          
          <Toolbar/>

          <Switch>
                <Route exact path="/exams/Registrar" element={<RegistrarExamen/>}></Route> 
                <Route exact path="/exams/Asignar" element={<AsignarExamen/>}></Route> 
                <Route exact path="/exams/Lista" element={<ListarExamen/>}></Route> 
                <Route exact path="/profiles/Listar" element={<ListarPerfil/>}></Route> 
                <Route exact path="/profiles/Registrar" element={<RegistrarPerfil/>}></Route> 
                <Route exact path="/category/Listar" element={<ListarCategoria/>}></Route> 
                <Route exact path="/category/Registrar" element={<RegistrarCategoria/>}></Route> 
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
