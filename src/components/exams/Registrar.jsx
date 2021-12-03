import { Button, Container, Grid, TextField, MenuItem} from '@mui/material';
import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import styles from '../tools/Styles';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider
  } from '@mui/material';
import { obtenerAreaServicio } from '../../actions/AreaServicio';
import { obtenerCategoriaExamenes } from '../../actions/CategoriaAction';
import { obtenerTipoMuestra } from '../../actions/TipoMuestra';
import { obtenerUnidadMedidas } from '../../actions/UnidadMedidas';
import { obtenerTipoResultado } from '../../actions/TipoResultado';

  const RegistrarExamen = () =>{

    const [data, setData] = useState({
        areaS: [],
        categoria: [],
        tipoMuestra: [],
        unidadMedidas: [],
        tipoResultado: []
    })

    useEffect(() => {
        consultarExamenes();   
    }, []);
    
    const consultarExamenes = () =>{
    
        obtenerAreaServicio().then((response) =>{
            setData((antes) =>({
                ...antes,
                areaS: response.data
            }))
        })

        obtenerCategoriaExamenes().then((response) => {
            setData((antes) => ({
                ...antes,
                categoria: response.data
            }))
        })

        obtenerTipoMuestra().then((response) => {
            setData((antes) => ({
                ...antes,
                tipoMuestra: response.data
            }))
        })

        obtenerUnidadMedidas().then((response) =>{
            setData((antes) => ({
                ...antes,
                unidadMedidas: response.data
            }))
        })

        obtenerTipoResultado().then((response) =>{
            setData((antes) => ({
                ...antes,
                tipoResultado: response.data
            }))
        })

    }

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

                                    <option value="0">Seleccione...</option>
                                        {data.areaS.map((id) => {
                                            return (
                                                <option
                                                    key={id.idAreaServ}
                                                    value={id.idAreaServ}>
                                                    {id.descripcion}
                                                </option>   
                                            );
                                        })}
                                    
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

                                    <option value="0">Seleccione...</option>
                                        {data.categoria.map((id) => {
                                            return (
                                                <option
                                                    key={id.idCategoriaExamenes}
                                                    value={id.idCategoriaExamenes}>
                                                    {id.descripcion}
                                                </option>   
                                            );
                                        })}
                                    
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
                                    <option value="0">Seleccione...</option>
                                        {data.tipoMuestra.map((id) => {
                                            return (
                                                <option
                                                    key={id.idTipoMuestra}
                                                    value={id.idTipoMuestra}>
                                                    {id.descripcion}
                                                </option>   
                                            );
                                        })}
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

                                    <option value="0">Seleccione...</option>
                                        {data.unidadMedidas.map((id) => {
                                            return (
                                                <option
                                                    key={id.idUnidadMedidas}
                                                    value={id.idUnidadMedidas}>
                                                    {id.unidadMedida}
                                                </option>   
                                            );
                                        })}
                                    
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

                                    <option value="0">Seleccione...</option>
                                        {data.tipoResultado.map((id) => {
                                            return (
                                                <option
                                                    key={id.idTipoResultado}
                                                    value={id.idTipoResultado}>
                                                    {id.descripcion}
                                                </option>   
                                            );
                                        })}
                                    
                                </TextField>
                            </Grid>

                            <Grid item xs={12} md={12}>
                                <TextField name="nombre" variant="outlined" fullWidth label="Descripción" />
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