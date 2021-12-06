import MuithemeProvider from '@mui/material/styles/ThemeProvider';
import React from 'react';
import theme from './components/tools/Theme';
import Sidebar from './pages/menu'
import Login from './pages/login'
import Register from './pages/register'
import Index from './pages/index'
import Home from './pages/home'
import { BrowserRouter as Router, Route, Routes as Switch, Link } from 'react-router-dom';

function App() {
  return (

    <MuithemeProvider theme={theme}>

       <Router>
        <div className="App">

          <div className="Content">        

            <Sidebar/>

            {/* { <Switch>
                <Route exact path="/pages/index" element={<Index/>}></Route>
                <Route exact path="/pages/register" element={<Register/>}></Route>
                <Route exact path="/pages/login" element={<Login/>}></Route>
                <Route exact path="/pages/menu" element={<Sidebar/>}></Route>
            </Switch> }

            <Home/> */}

          </div>
        </div>
      </Router>  
      
    </MuithemeProvider>
  );
}

export default App;