import React, { Component, useEffect, useState } from 'react';
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
import Bannerm from '../../images/medico.png';
import { deleteMedico, obtenerMedico } from '../../actions/MedicoAction';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const ListarMedico = () =>{

  const [data, setData] = useState({
    medico: []
  })

  useEffect(() => {
      consultarExamenes();   
  }, []);

  const consultarExamenes = () =>{

      obtenerMedico().then((response) => {
          setData((antes) =>({
              ...antes, 
              medico: response.data
          }));
      }) 
  }

  var dato;

  const borrarValoresNormalesButton= e => {
    e.preventDefault();
    deleteMedico(dato).then(response => {
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
            image={Bannerm}
            alt="Paella dish"
          />
          
              <CardHeader
              subheader="Registro de todos los médicos en el sistema"
              title="Lista de médicos"
              action={<a href="../medicos/Registrar"><Button fullWidth variant="contained" size="small" color="primary">Agregar un nuevo registro</Button></a>}
              />

              <Divider />

              <CardContent>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell >Nombres</StyledTableCell>
                      <StyledTableCell >Apellidos</StyledTableCell>
                      <StyledTableCell >Identificación</StyledTableCell>
                      <StyledTableCell >Código de MINSA</StyledTableCell>
                      <StyledTableCell >Email</StyledTableCell>
                      <StyledTableCell align="center" width="14%"></StyledTableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.medico.map((exam) => (
                      <TableRow key={exam.idTblMedico}>

                         
                        <TableCell component="th" scope="row">
                          {exam.nombres}
                        </TableCell>
                        
                        <TableCell component="th" scope="row">
                          {exam.apellidos}
                        </TableCell>

                        <TableCell component="th" scope="row">
                          {exam.numIdentificacion}
                        </TableCell>

                        <TableCell component="th" scope="row">
                          {exam.codMinsa}
                        </TableCell>

                        <TableCell component="th" scope="row">
                          {exam.email}
                        </TableCell>

                        <TableCell>

                          <IconButton aria-label="edit" color="warning">
                            <EditIcon />
                          </IconButton>

                          <IconButton aria-label="delete"  onClick={handleClickOpen} onClickCapture={dato = exam.idTblMedico} color="error">
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

export default ListarMedico;