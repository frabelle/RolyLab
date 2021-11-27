import { Button, Container, Grid, Select, TextField, Typography, InputLabel, FormControl, MenuItem} from '@mui/material';
import React, { Component } from 'react';
import styles from '../tools/Styles';
import axios from 'axios';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider
  } from '@mui/material';
import { obtenerExamen } from '../../actions/ExamenAction';

class AsignarExamen extends Component {

    state = {
        exams: [],
        perfil: []
      }
    
      componentDidMount(){
        this.consultarExamenes();  
      }
    
      consultarExamenes = async () =>{
        const url = `https://localhost:44342/api/Examen`;
        const url2 = `https://localhost:44342/api/Perfil`;
    
        const respuesta = await fetch(url);
        const respuesta2 = await fetch(url2);
        const exams = await respuesta.json();
        const perfil = await respuesta2.json();
    
        console.log(exams);
        
        this.setState({
          exams: exams,
          perfil: perfil,
        });
      }

      render(){
    return(
        <Container component="main" maxWidth="lg" justify = "center">
            <div style={styles.paper}>

                <Card>
                    <CardHeader
                    subheader="Asignando un examen a un perfil"
                    title="Asignación de examen"
                    />

                    <Divider />

                    <CardContent>
                        <form style={styles.form}>
                            <Grid container spacing={3}>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Examen"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >
                                        
                                        <option value="0">Seleccione...</option>
                                        
                                        {this.state.exams.map((exam) => (
                                            <option
                                                key={exam.idExamen}
                                                value={exam.idExamen}
                                            >
                                                {exam.descripcionCorta}
                                            </option>
                                        ))}
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Perfil"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>
                                        
                                        {this.state.perfil.map((perfils) => (
                                            <option
                                                key={perfils.idPerfiles}
                                                value={perfils.idPerfiles}
                                            >
                                                {perfils.descripcion}
                                            </option>
                                        ))}
                                        
                                    </TextField>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>

                    <Divider />

                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        p: 2
                    }}
                    >
                        <Grid item xs={12} md={2}>
                            <Button type="submit" fullWidth variant="contained" color="primary">
                                Guardar cambios
                            </Button>
                        </Grid>

                    </Box>
                </Card>
           
            </div>
        </Container>

      

    )
                }
}

export default AsignarExamen;