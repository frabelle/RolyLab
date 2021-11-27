import React, { Component } from 'react';
import styles from '../tools/Styles';
import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider
} from '@mui/material';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import {Grid, Typography} from '@mui/material/';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function createData(name, area, category, type, unit, typeresult) {
  return { name, area, category, type, unit, typeresult };
}

const rows = [
  createData('Este es el nombre de examen 1', 'Área de laboratorio 1', 'Categoría 1', 'Tipo 1', 'Unidad 1', 'Resultado 1'),
  createData('Este es el nombre de examen 2', 'Área de laboratorio 2', 'Categoría 2', 'Tipo 2', 'Unidad 2', 'Resultado 2'),
  createData('Este es el nombre de examen 3', 'Área de laboratorio 3', 'Categoría 3', 'Tipo 3', 'Unidad 3', 'Resultado 3'),
  createData('Este es el nombre de examen 4', 'Área de laboratorio 4', 'Categoría 4', 'Tipo 4', 'Unidad 4', 'Resultado 4'),
  createData('Este es el nombre de examen 5', 'Área de laboratorio 5', 'Categoría 5', 'Tipo 5', 'Unidad 5', 'Resultado 5'),
];

class ListarExamen extends Component {

  state = {
    profiles: []

  }

  componentDidMount(){
    this.consultarPerfiles();  
  }

  consultarPerfiles = async () =>{
    const url = `https://localhost:44342/api/Perfil`;

    const respuesta = await fetch(url);
    const profiles = await respuesta.json();
    
    this.setState({
      profiles: profiles
    });
  }
  render(){  
  return(

    <Container component="main" maxWidth="lg" justify = "center">
            <div style={styles.paper}>

                <Card>

                    <CardHeader
                    subheader="Registro de todos los perfiles en el sistema"
                    title="Lista de perfiles"
                    />

                    <Divider />

                    <CardContent>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 400 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell >ID</StyledTableCell>
                            <StyledTableCell >Nombre del perfil</StyledTableCell>
                            <StyledTableCell align="center">Estado</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                          {this.state.profiles.map((exam) => (
                            <TableRow key={exam.idPerfiles}>
                              <TableCell component="th" scope="row">
                                {exam.idPerfiles}
                              </TableCell>
                              <TableCell>{exam.descripcion}</TableCell>
                              <TableCell align="center">{exam.estado}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    </CardContent>

                    <Divider />

                </Card>
           
            </div>
        </Container>
  )
  }
}

export default ListarExamen;