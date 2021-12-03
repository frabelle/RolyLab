import { Button, Container, Grid, TextField} from '@mui/material';
import { useState } from 'react';
import  { Link } from 'react-router-dom'
import styles from '../tools/Styles';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider
  } from '@mui/material';
import {registrarProfesion} from '../../actions/ProfesionesAction'

const RegistrarProfesion = () =>{

    const [profesion, setProfesion] = useState({
        descripcion: ''
    })

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setProfesion( anterior => ({
            ...anterior,
            [name] : value
        }))
    }

    const registrarProfesionButton= e => {
        e.preventDefault();
        registrarProfesion(profesion).then(response => {
            console.log('Se registró la profesión con éxito ', response);
            window.localStorage.setItem("token_seguridad", response.data.token);
        })

        console.log("Datos del usuario: ", profesion)
    }

    return(
        <Container component="main" maxWidth="lg" justify = "center">
            <div style={styles.paper}>

                <Card>

                    <CardHeader
                        subheader="Añadiendo un nuevo registro de profesión"
                        title="Profesiones"
                    />

                    <Divider />

                    <CardContent>
                        <form style={styles.form}>
                            <Grid container spacing={3}>

                                <Grid item xs={12} md={12}>
                                    <TextField name="descripcion" value={profesion.descripcion} onChange={ingresarValores} variant="outlined" fullWidth label="Nombre de profesión" />
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
                            <Button type="submit" onClick={registrarProfesionButton} fullWidth variant="contained" color="primary">
                                Guardar cambios
                            </Button>
                        </Grid>

                    </Box>
                </Card>
           
            </div>
        </Container>

      

    )
}

export default RegistrarProfesion;