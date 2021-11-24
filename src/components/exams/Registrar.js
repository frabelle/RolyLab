import { Button, Container, Grid, Select, TextField, Typography, InputLabel, FormControl, MenuItem} from '@mui/material';
import React from 'react';
import styles from '../tools/Styles';

const RegistrarExamen = () =>{
    return(
        <Container component="main" maxWidth="md" justify = "center">
            <div style={styles.paper}>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography component="h1" variant="h5" style={{textAlign:"left"}}>
                            Registrar un examen
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography component="h6" style={{textAlign:"right"}}>
                            Regresar
                        </Typography>
                    </Grid>
                </Grid>
                
                <form style={styles.form}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField name="nombre" variant="outlined" fullWidth label="Nombre del examen" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Área de servicio</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Age"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item xs={12} md={12}>
                            <Button type="submit" fullWidth variant="contained" color="primary" size="large" style={styles.submit}>
                                Enviar
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}

export default RegistrarExamen;