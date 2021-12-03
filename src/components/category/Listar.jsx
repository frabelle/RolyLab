import React, { Component } from 'react';
import styles from '../tools/Styles';
import { styled } from '@mui/material/styles';
import {
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Divider,
  Button
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
import EditIcon from '@mui/icons-material/Edit';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Bannerc from '../../images/categoria.png';

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

class ListarCategoria extends Component {

  state = {
    exams: []

  }

  componentDidMount(){
    this.consultarCategoria();  
  }

  consultarCategoria= async () =>{
    const url = `https://localhost:44342/api/CategoriaExamenes`;

    const respuesta = await fetch(url);
    const exams = await respuesta.json();

    console.log(exams);
    
    this.setState({
      exams: exams
    });
  }
  render(){  
  return(

    <Container component="main" maxWidth="lg" justify = "center">
            <div style={styles.paper}>

                <Card>
                  
                <CardMedia
                     component="img"
                     height="194"
                     image={Bannerc}
                     alt="Paella dish"
               />

                    <CardHeader
                    subheader="Registro de todos las categorías de exámenes en el sistema"
                    title="Lista de categoría"
                    action={<a href="../category/Registrar"><Button fullWidth variant="contained" size="small" color="primary">Agregar un nuevo registro</Button></a>}
                    />

                    <Divider />

                    <CardContent>
                      <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 400 }} aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell >Nombre de la categoría</StyledTableCell>
                        <StyledTableCell align="center" width="14%"></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                      {this.state.exams.map((exam) => (
                        <TableRow key={exam.idCategoriaExamenes}>

                          <TableCell component="th" scope="row">
                            {exam.descripcion}
                          </TableCell>

                          <TableCell>

                            <IconButton aria-label="edit" color="warning">
                              <EditIcon />
                            </IconButton>

                            <IconButton aria-label="delete" color="error">
                              <DeleteIcon />
                            </IconButton>

                          </TableCell>
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

export default ListarCategoria;