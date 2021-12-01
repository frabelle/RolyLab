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
  

const RegistrarPaciente = () =>{
    return(
        <Container component="main" maxWidth="lg" justify = "center">
            <div style={styles.paper}>

                <Card>

                    <CardHeader
                    subheader="Añadiendo un nuevo registro de paciente"
                    title="Paciente"
                    />

                    <Divider />

                    <CardContent>
                        <form style={styles.form}>
                            <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Identificación"
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
                                <Grid item xs={12} md={6}>
                                    <TextField name="numidentif" variant="outlined" fullWidth label="Número de identificación" />
                                </Grid>
                                
                                <Grid item xs={12} md={3}>
                                    <TextField name="nombre1" variant="outlined" fullWidth label="Primer nombre" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField name="nombre2" variant="outlined" fullWidth label="Segundo nombre" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField name="apellido1" variant="outlined" fullWidth label="Primer apellido" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField name="apellido2" variant="outlined" fullWidth label="Segundo apellido" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                              <TextField
                                   id="date"
                                   label="Fecha de nacimiento"
                                   type="date"
                                  defaultValue=""
                                  sx={{ width: 259 }}
                                  InputLabelProps={{
                                  shrink: true,
                                 }}
                             />
                                </Grid>
                                 
                                <Grid item xs={12} md={3}>
                                    <TextField name="numInss" variant="outlined" fullWidth label="Número de INSS" />
                                </Grid>
                                 
                                <Grid item xs={12} md={6}>
                                    <TextField name="email" variant="outlined" fullWidth label="Email" />
                                </Grid>


                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        label="Sexo"
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
                                        label="País de nacionalidad"
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
                                        label="Departamento de nacionalidad"
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
                                        label="País de residencia"
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
                                        label="Departamento de residencia"
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
                                        label="Tipo de Sangre"
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


                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Profesión"
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
                                 
                                <Grid item xs={12} md={6}>
                                    <TextField name="direccion" variant="outlined" fullWidth label="Dirección domiciliar" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField name="telef" variant="outlined" fullWidth label="Teléfono domiciliar" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField name="telefm" variant="outlined" fullWidth label="Teléfono móvil" />
                                </Grid>


                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        label="Religión"
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
                                    <TextField name="activo" variant="outlined" fullWidth label="Activo" />
                                </Grid>


                                <Grid item xs={12} md={3}>
                                    <TextField name="embarazada" variant="outlined" fullWidth label="Embarazada" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField name="fallecido" variant="outlined" fullWidth label="Fallecido" />
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

export default RegistrarPaciente;