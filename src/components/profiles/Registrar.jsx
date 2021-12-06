import { Button, Container, Grid, Select, TextField, Typography, InputLabel, FormControl, MenuItem} from '@mui/material';
import React from 'react';
import styles from '../tools/Styles';
import { useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider
  } from '@mui/material';
  import {registrarPerfil} from '../../actions/PerfilAction'



const RegistrarPerfil = () =>{

    const [perfil, setPerfil] = useState({
        descripcion: ''
    })

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setPerfil( anterior => ({
            ...anterior,
            [name] : value
        }))
    }

    const registrarPerfilButton= e => {
        e.preventDefault();
        registrarPerfil(perfil).then(response => {
            console.log('Se registró la profesión con éxito ', response);
            window.localStorage.setItem("token_seguridad", response.data.token);
        })
        
        console.log("Datos del usuario: ", perfil)
    }


    return(
        <Container component="main" maxWidth="lg" justify = "center">
            <div style={styles.paper}>

                <Card>

                    <CardHeader
                    subheader="Añadiendo un nuevo registro de perfil"
                    title="Perfiles"
                    />

                    <Divider />
                    <form style={styles.form}>
                    <CardContent>
                        
                            <Grid container spacing={3}>

                                <Grid item xs={12} md={12}>
                                    <TextField name="descripcion" value={perfil.descripcion} onChange={ingresarValores} variant="outlined" fullWidth label="Nombre del examen" />
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
                            <Button type="submit" onClick={registrarPerfilButton} fullWidth variant="contained" color="primary">
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

export default RegistrarPerfil;