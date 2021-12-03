import React, { Component } from 'react';
import styles from '../tools/Styles';
import { Link, Routes, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import { styled } from '@mui/material/styles';
import {
  Button,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  CardHeader,
  Divider
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Container from '@mui/material/Container';
import Table from '@mui/material/Table';
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

class ListarExamen extends Component {

  state = {
    exams: []

  }

  componentDidMount(){
    this.consultarExamenes();  
  }

  consultarExamenes = async () =>{
    const url = `https://localhost:44342/api/Examen`;
    const url2 = `https://localhost:44342/api/Examen`;

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
                  image="https://nosinmiscookies.com/wp-content/uploads/2019/09/como-optimizar-banner-publicitario.jpg"
                  alt="Paella dish"
                />

                    <CardHeader
                    subheader="Registro de todos los exámenes en el sistema"
                    title="Lista de exámenes"
                    action={<a href="../exams/Registrar"><Button fullWidth variant="contained" size="small" color="primary">Agregar un nuevo registro</Button></a>}
                    />

                    <Divider />

                    <CardContent>
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 400 }} aria-label="customized table">
                        <TableHead>
                          <TableRow>
                            <StyledTableCell >Nombre del examen</StyledTableCell>
                            <StyledTableCell>Descripción corta</StyledTableCell>
                            <StyledTableCell>Confidencial</StyledTableCell>
                            <StyledTableCell  align="center"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                          {this.state.exams.map((exam) => (
                            <TableRow key={exam.idExamen}>
                              <TableCell component="th" scope="row">
                                {exam.descripcionCorta}
                              </TableCell>
                              <TableCell>{exam.descripcion}</TableCell>
                              <TableCell>{exam.confidencial}</TableCell>
                              <TableCell  align="center">
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

export default ListarExamen;