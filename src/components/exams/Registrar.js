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

const RegistrarExamen = () =>{
    return(
        <Container component="main" maxWidth="lg" justify = "center">
            <div style={styles.paper}>

                <Card>

                    <CardHeader
                    subheader="Añadiendo un nuevo registro de examen"
                    title="Exámenes"
                    />

                    <Divider />

                    <CardContent>
                        <form style={styles.form}>
                            <Grid container spacing={3}>

                                <Grid item xs={12} md={6}>
                                    <TextField name="nombre" variant="outlined" fullWidth label="Nombre del examen" />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Área de servicio"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        label="Categoría"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        label="Tipo de muestra"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        label="Unidad de medida"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        label="Tipo de resultado"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={12}>
                                    <TextField name="descripcion" variant="outlined" fullWidth label="Descripción" />
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

export default RegistrarExamen;