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
import { obtenerPais } from '../../actions/PaisAction';
import { registrarDepartamento } from '../../actions/DepartamentoAction';
const RegistrarDepartamento = () =>{

    const [data, setData] = useState({
        pais: [],
        departamento: []
    })

    useEffect(() => {
        consultarExamenes();   
    }, []);
    
    const consultarExamenes = () =>{

        obtenerPais().then((response) => {
            setData((antes) =>({
                ...antes, 
                pais: response.data
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

    const registrarDepartamentoButton= e => {
        e.preventDefault();
        registrarDepartamento(data).then(response => {
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
                    subheader="Añadiendo un nuevo registro de departamento"
                    title="Departamentos"
                    />

                    <Divider />
                    
                    <form style={styles.form}>

                    <CardContent>
                        
                            <Grid container spacing={3}>
                              
                            <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="País"
                                        name="idPais"
                                        required
                                        select
                                        onChange={ingresarValores}
                                        value = {data.pais.idPais}
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>
                                        {data.pais.map((id) => {
                                            return (
                                                <option
                                                    key={id.idPais}
                                                    value={id.idPais}>
                                                    {id.descripcion}
                                                </option>   
                                            );
                                        })}
                                        
                                    </TextField>
                                </Grid>


                                <Grid item xs={12} md={6}>
                                    <TextField name="descripcion" value={data.departamento.descripcion} onChange={ingresarValores} variant="outlined" fullWidth label="Nombre del departamento" />
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
                            <Button type="submit"  onClick={registrarDepartamentoButton} fullWidth variant="contained" color="primary">
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

export default RegistrarDepartamento;