import React, { Component, useEffect, useState} from 'react';
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
import Bannere from '../../images/examen.png';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteExamen, obtenerExamen } from '../../actions/ExamenAction';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const ListarExamen =() =>{

  const [data, setData] = useState({
    valor: []
  })

  var dato;

  useEffect(() => {
      consultarExamenes();   
  }, []);

    const consultarExamenes = () =>{

        obtenerExamen().then((response) => {
            setData((antes) =>({
                ...antes, 
                valor: response.data
            }));
        }) 
    }

    const borrarValoresNormalesButton= e => {
      e.preventDefault();
      deleteExamen(dato).then(response => {
          console.log('Se eliminó el dato con éxito ', response);
          window.localStorage.setItem("token_seguridad", response.data.token);
          handleClose();
      })

      console.log("Datos del usuario: ", data)
  }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

  return(

    <Container component="main" maxWidth="lg" justify = "center">
            <div style={styles.paper}>

                <Card>


                    <CardMedia
                           component="img"
                           height="194"
                           image={Bannere}
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
                            <StyledTableCell  align="center"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                          {data.valor.map((exam) => (
                            <TableRow key={exam.idExamen}>
                              <TableCell component="th" scope="row">
                                {exam.descripcionCorta}
                              </TableCell>
                              <TableCell>{exam.descripcion}</TableCell>
                              <TableCell  align="center">
                              <IconButton aria-label="edit" color="warning">
                                <EditIcon />
                              </IconButton>

                              <IconButton aria-label="delete" onClick={handleClickOpen} onClickCapture={dato = exam.idExamen} color="error">
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

            <div>
          <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
          >
              <DialogTitle style={{marginTop: '20px'}} id="alert-dialog-title">
              {"¿Estás seguro que deseas eliminar este registro?"}
              </DialogTitle>

              <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                      Si estás decidido en eliminarlo recuerda que luego no podrás volver a recuperar estos
                      datos.
                  </DialogContentText>
              </DialogContent>

              <DialogActions style={{marginBottom: '10px'}}>
                  <Button variant="contained" onClick={borrarValoresNormalesButton} autoFocus>
                      De acuerdo
                  </Button>
                  <Button variant="contained" color="error" size="sm" onClick={handleClose}>Desacuerdo</Button>
              </DialogActions>

          </Dialog>
      </div>
        </Container>
  )
  
}

export default ListarExamen;