import MuithemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
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
      <Router>
        <div className="App">
          <Form/>
          <div className="Content">    
           <Switch>
              <Route exact path="/exams/Registrar" element={<RegistrarExamen/>}></Route> 
              <Route exact path="/exams/Asignar" element={<AsignarExamen/>}></Route> 
              <Route exact path="/exams/Lista" element={<ListarExamen/>}></Route> 
              <Route exact path="/profiles/Listar" element={<ListarPerfil/>}></Route> 
              <Route exact path="/profiles/Registrar" element={<RegistrarPerfil/>}></Route> 
              <Route exact path="/category/Listar" element={<ListarCategoria/>}></Route> 
              <Route exact path="/category/Registrar" element={<RegistrarCategoria/>}></Route> 
            </Switch>        
          </div>
        </div>
      </Router>
    </MuithemeProvider>
  );
}

export default App;