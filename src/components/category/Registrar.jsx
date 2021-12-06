import { Button, Container, Grid, Select, TextField, Typography, InputLabel, FormControl, MenuItem} from '@mui/material';
import React from 'react';
import styles from '../tools/Styles';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider
  } from '@mui/material';
  import { useState } from 'react';
  import { registrarCategoriaExamenes } from '../../actions/CategoriaAction';

const RegistrarCategoria = () =>{

    const [data, setData] = useState({
        descripcion: ''
    })

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setData( anterior => ({
            ...anterior,
            [name] : value
        }))
    }

    const registrarCategoriaButton= e => {
        e.preventDefault();
        registrarCategoriaExamenes(data).then(response => {
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
                    subheader="Añadiendo un nuevo registro de categoría"
                    title="Categoría de exámenes"
                    />

                    <Divider />

                    <form style={styles.form}>
                    <CardContent>
                        
                            <Grid container spacing={3}>

                                <Grid item xs={12} md={12}>
                                    <TextField name="descripcion" value={data.descripcion} onChange={ingresarValores} variant="outlined" fullWidth label="Nombre de la categoría" />
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
                            <Button type="submit" onClick={registrarCategoriaButton} fullWidth variant="contained" color="primary">
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

export default RegistrarCategoria;