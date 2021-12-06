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
import { registrarValoresNormales } from '../../actions/ValoresNormales';

const RegistrarValnormales = () =>{

    const [data, setData] = useState({
        sexo: [],
        examen: [],
        valor: []
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

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setData( anterior => ({
            ...anterior,
            [name] : value
        }))
    }

    const registrarValoresNormalesButton= e => {
        e.preventDefault();
        registrarValoresNormales(data).then(response => {
            console.log('Se registró la profesión con éxito ', response);
            window.localStorage.setItem("token_seguridad", response.data.token);
        })

        console.log("Datos del usuario: ", data)
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
                    <form style={styles.form}>
                    <CardContent>
                        
                            <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Examen"
                                        name="idExamen"
                                        required
                                        select
                                        onChange={ingresarValores}
                                        value = {data.valor.idExamen}
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
                                        name="idSexo"
                                        required
                                        select
                                        onChange={ingresarValores}
                                        value = {data.valor.idSexo}
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
                                    <TextField name="rangoBajo" onChange={ingresarValores}
                                        value = {data.valor.rangoBajo} variant="outlined" fullWidth label="Rango bajo" />
                                </Grid>
                                
                                <Grid item xs={12} md={6}>
                                    <TextField name="rangoAlto" onChange={ingresarValores}
                                        value = {data.valor.rangoAlto}  variant="outlined" fullWidth label="Rango alto" />
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
                            <Button type="submit" onClick={registrarValoresNormalesButton} fullWidth variant="contained" color="primary">
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

export default RegistrarValnormales;