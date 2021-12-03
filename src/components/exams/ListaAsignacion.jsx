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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

class ListarCategoria extends Component {

  state = {
    exams: []

  }

  componentDidMount(){
    this.consultarCategoria();  
  }

  consultarCategoria= async () =>{
    const url = `https://localhost:44342/api/PerfilExamen`;

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
              subheader="Registro de todos las categorías de exámenes en el sistema"
              title="Lista de categoría"
              action={<a href="../exams/Asignar"><Button fullWidth variant="contained" size="small" color="primary">Agregar un nuevo registro</Button></a>}
              />

              <Divider />

              <CardContent>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell >Nombre del examen</StyledTableCell>
                      <StyledTableCell >Nombre del perfil</StyledTableCell>
                      <StyledTableCell align="center" width="14%"></StyledTableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.exams.map((exam) => (
                      <TableRow key={exam.idPerfilesExamenes}>

                        <TableCell component="th" scope="row">
                          {exam.idExamen}
                        </TableCell>

                        <TableCell component="th" scope="row">
                          {exam.idPerfiles}
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