import * as React from 'react';
import styles from '../tools/Styles';
import { styled } from '@mui/material/styles';
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

const ListarExamen = () =>{
  return(
      <Container component="main" maxWidth="lg" justify = "center">
          <div style={styles.paper}>

          <Grid container spacing={2}>

            <Grid item xs={12} md={6}>
                <Typography component="h1" variant="h5" style={{textAlign:"left"}}>
                    Lista de exámenes
                </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
                <Typography component="h6" style={{textAlign:"right"}}>
                    Regresar a la página anterior
                </Typography>
            </Grid>

          </Grid>
          
          <TableContainer component={Paper}>
              <Table sx={{ minWidth: 400 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell >Nombre del examen</StyledTableCell>
                    <StyledTableCell align="center">Área de servicio</StyledTableCell>
                    <StyledTableCell align="center">Categoría</StyledTableCell>
                    <StyledTableCell align="center">Tipo de muestra</StyledTableCell>
                    <StyledTableCell align="center">Unidad de medida</StyledTableCell>
                    <StyledTableCell align="center">Tipo de resultado</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.area}</TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">{row.type}</TableCell>
                      <TableCell align="center">{row.unit}</TableCell>
                      <TableCell align="center">{row.typeresult}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

        </div>
      </Container>
  )
}

export default ListarExamen;