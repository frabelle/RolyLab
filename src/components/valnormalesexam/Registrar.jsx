import { Button, Container, Grid, Select, TextField, Typography, InputLabel, FormControl, MenuItem} from '@mui/material';
import React from 'react';
import styles from '../tools/Styles';
import { useState, useEffect } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider
  } from '@mui/material';
import { obtenerExamen } from '../../actions/ExamenAction';
import { obtenerSexos } from '../../actions/SexoAction';

const RegistrarValnormales = () =>{

    const [data, setData] = useState({
        sexo: [],
        examen: [],
    })

    useEffect(() => {
        consultarExamenes();   
    }, []);
    
    const consultarExamenes = () =>{
    
        obtenerSexos().then((response) => {
            setData((antes) =>({
                ...antes, 
                sexo: response.data
            }));
        }) 

        obtenerExamen().then((response) =>{
            setData((antes) =>({
                ...antes, 
                examen: response.data
            }));
        })
    }


    return(
        <Container component="main" maxWidth="lg" justify = "center">
            <div style={styles.paper}>

                <Card>

                    <CardHeader
                    subheader="Añadiendo un nuevo registro de valor normal de examen"
                    title="Valores normales de exámenes"
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
                                        {data.examen.map((exam) => {
                                            return (
                                                <option
                                                    key={exam.idExamen}
                                                    value={exam.idExamen}>
                                                    {exam.descripcion}
                                                </option>   
                                            );
                                        })}
                                        
                                    </TextField>

                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Sexo"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>
                                        {data.sexo.map((exam) => {
                                            return (
                                                <option
                                                    key={exam.idSexo}
                                                    value={exam.idSexo}>
                                                    {exam.descripcion}
                                                </option>   
                                            );
                                        })}
                                        
                                    </TextField>
                                </Grid>

                               
                                <Grid item xs={12} md={6}>
                                    <TextField name="rango" variant="outlined" fullWidth label="Rango bajo" />
                                </Grid>
                                
                                <Grid item xs={12} md={6}>
                                    <TextField name="rango" variant="outlined" fullWidth label="Rango alto" />
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

export default RegistrarValnormales;