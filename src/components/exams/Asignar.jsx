import { Button, Container, Grid, Select, TextField, Typography, InputLabel, FormControl, MenuItem} from '@mui/material';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import styles from '../tools/Styles';
import axios from 'axios';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider
  } from '@mui/material';
import { obtenerPerfiles } from '../../actions/PerfilAction';
import {obtenerExamen} from '../../actions/ExamenAction';
import { registrarPerfilExamen } from '../../actions/PerfilExamenAction';

const AsignarExamen = () => {

    const [data, setData] = useState({
        perfil: [],
        examen: [],
        asignar: []
    })

    useEffect(() => {
        consultarExamenes();   
    }, []);
    
    const consultarExamenes = () =>{
    
        obtenerPerfiles().then((response) => {
            setData((antes) =>({
                ...antes, 
                perfil: response.data
            }));
        }) 

        obtenerExamen().then((response) =>{
            setData((antes) =>({
                ...antes, 
                examen: response.data
            }));
        })
    }

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setData( anterior => ({
            ...anterior,
            [name] : value
        }))
    }

    const registrarAsignarButton= e => {
        e.preventDefault();
        registrarPerfilExamen(data.asignar).then(response => {
            console.log('Se registró la profesión con éxito ', response);
            window.localStorage.setItem("token_seguridad", response.data.token);
        })

        console.log("Datos del usuario: ", data.asignar)
    }

    return(
        <Container component="main" maxWidth="lg" justify = "center">
            <div style={styles.paper}>

                <Card>
                    <CardHeader
                    subheader="Asignando un examen a un perfil"
                    title="Asignación de examen"
                    />

                    <Divider />
                    <form style={styles.form}>
                    <CardContent>
                            <Grid container spacing={3}>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Examen"
                                        id = "idExamen"
                                        required
                                        select
                                        value = {data.asignar.idExamen}
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >
                                        
                                        <option value="0">Seleccione...</option>
                                        {data.examen.map((exam) => {
                                            return (
                                                <option
                                                    key={exam.idPerfiles}
                                                    value={exam.idPerfiles}>
                                                    {exam.descripcion}
                                                </option>   
                                            );
                                        })}
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Perfil"
                                        name="idPerfiles"
                                        required
                                        select
                                        value = {data.asignar.idPerfiles}
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>

                                        {data.perfil.map((perf) => {
                                            return (
                                                <option
                                                key={perf.idPerfiles}
                                                value={perf.idPerfiles}>
                                                {perf.descripcion}
                                        </option>   
                                            );
                                        })}

                                    </TextField>
                                </Grid>

                            </Grid>
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
                            <Button type="submit" onClick={registrarAsignarButton} fullWidth variant="contained" color="primary">
                                Guardar cambios
                            </Button>
                        </Grid>

                    </Box>

                    </form>

                </Card>
           
            </div>
        </Container>

      

    )
}

export default AsignarExamen;