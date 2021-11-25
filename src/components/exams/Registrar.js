import { Button, Container, Grid, Select, TextField, Typography, InputLabel, FormControl, MenuItem} from '@mui/material';
import React from 'react';
import styles from '../tools/Styles';

const RegistrarExamen = () =>{
    return(
        <Container component="main" maxWidth="lg" justify = "center">
            <div style={styles.paper}>

                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography component="h1" variant="h5" style={{textAlign:"left"}}>
                            Registrar un examen
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography component="h6" style={{textAlign:"right"}}>
                            Regresar a la página anterior
                        </Typography>
                    </Grid>
                </Grid>
                
                <form style={styles.form}>

                    <Grid container spacing={3}>

                        <Grid item xs={12} md={6}>
                            <TextField name="nombre" variant="outlined" fullWidth label="Nombre del examen" />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Área de servicio</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="area"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="area"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Tipo de muestra</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="area"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Unidad de medida</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="area"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={3}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Tipo de resultado</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="area"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12} md={12}>
                            <TextField name="descripcion" variant="outlined" fullWidth label="Descripción" />
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Button type="submit" fullWidth variant="contained" color="primary" size="large" style={styles.submit}>
                                Guardar cambios
                            </Button>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Button type="submit" fullWidth variant="contained" color="warning" size="large" style={styles.submit}>
                                Cancelar
                            </Button>
                        </Grid>

                    </Grid>

                </form>
            </div>
        </Container>
    )
}

export default RegistrarExamen;