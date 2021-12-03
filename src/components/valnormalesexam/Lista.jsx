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
import Bannerv from '../../images/valnormal.png';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

class ListarValoresnormales extends Component {

  state = {
    exams: []

  }

  componentDidMount(){
    this.consultarValoresnormales();  
  }

  consultarValoresnormales= async () =>{
    const url = `https://localhost:44342/api/`;

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
            image={Bannerv}
            alt="Paella dish"
          />
          
              <CardHeader
              subheader="Registro de los valores normales de exámen en el sistema"
              title="Lista de valores normales de examenes"
              action={<Button fullWidth variant="outlined" size="small" color="primary">Agregar un nuevo registro</Button>}
              />

              <Divider />

              <CardContent>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell >Exámen</StyledTableCell>
                      <StyledTableCell >Sexo</StyledTableCell>
                      <StyledTableCell >Rango Bajo</StyledTableCell>
                      <StyledTableCell >Rango Alto</StyledTableCell>
                      <StyledTableCell align="center" width="14%"></StyledTableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                    {this.state.exams.map((exam) => (
                      <TableRow key={exam.IdValoresNormales}>

                        <TableCell component="th" scope="row">
                          {exam.IdExamen}
                        </TableCell>
                         
                        <TableCell component="th" scope="row">
                          {exam.IdSexo}
                        </TableCell>

                        <TableCell component="th" scope="row">
                          {exam.RangoBajo}
                        </TableCell>

                        <TableCell component="th" scope="row">
                          {exam.RangoAlto}
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

export default ListarValoresnormales;