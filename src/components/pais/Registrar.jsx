import { Button, Container, Grid, Select, TextField, Typography, InputLabel, FormControl, MenuItem} from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../tools/Styles';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider
  } from '@mui/material';
  import { registrarPais } from '../../actions/PaisAction';

const RegistrarPais = () =>{

    const [pais, setPais] = useState({
        descripcion: ''
    })

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setPais( anterior => ({
            ...anterior,
            [name] : value
        }))
    }

    const registrarPaisButton= e => {
        e.preventDefault();
        registrarPais(pais).then(response => {
            console.log('Se registró la profesión con éxito ', response);
            window.localStorage.setItem("token_seguridad", response.data.token);
        })
        
        console.log("Datos del usuario: ", pais)
    }


    return(
        <Container component="main" maxWidth="lg" justify = "center">
            <div style={styles.paper}>

                <Card>

                    <CardHeader
                    subheader="Añadiendo un nuevo registro de país"
                    title="País"
                    />

                    <Divider />
                    <form style={styles.form}>

                    <CardContent>
                        
                            <Grid container spacing={3}>

                                <Grid item xs={12} md={12}>
                                    <TextField name="descripcion" value={pais.descripcion} onChange={ingresarValores} variant="outlined" fullWidth label="Nombre del país" />
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
                            <Button type="submit" onClick={registrarPaisButton} fullWidth variant="contained" color="primary">
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

export default RegistrarPais;