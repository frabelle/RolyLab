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
import { registrarReligion } from '../../actions/ReligionAction';

const RegistrarReligion = () =>{

    const [religion, setReligion] = useState({
        descripcion: ''
    })

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setReligion( anterior => ({
            ...anterior,
            [name] : value
        }))
    }

    const registrarReligionButton= e => {
        e.preventDefault();
        registrarReligion(religion).then(response => {
            console.log('Se registró los datos con éxito ', response);
            window.localStorage.setItem("token_seguridad", response.data.token);
        })

        console.log("Datos del usuario: ", religion)
    }

    return(
        <Container component="main" maxWidth="lg" justify = "center">
            <div style={styles.paper}>

                <Card>

                    <CardHeader
                    subheader="Añadiendo un nuevo registro de religión"
                    title="Religión"
                    />

                    <Divider />
                    <form style={styles.form}>
                    <CardContent>
                        
                            <Grid container spacing={3}>

                                <Grid item xs={12} md={12}>
                                <TextField name="descripcion" value={religion.descripcion} onChange={ingresarValores} variant="outlined" fullWidth label="Nombre de la religión" />
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
                            <Button type="submit" onClick={registrarReligionButton} fullWidth variant="contained" color="primary">
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

export default RegistrarReligion;