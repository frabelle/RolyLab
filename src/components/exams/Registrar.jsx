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
import { registrarExamen} from '../../actions/ExamenAction'

  const RegistrarExamen = () =>{

    const [data, setData] = useState({
        areaS: [],
        categoria: [],
        tipoMuestra: [],
        unidadMedidas: [],
        tipoResultado: [],
        examen: []
    })

    useEffect(() => {
        consultarExamenes();   
    }, []);

    const ingresarValores = e =>{
        const {name, value} = e.target;
        setData( anterior => ({
            ...anterior,
            [name] : value
        }))
    }

    const registrarExamenButton= e => {
        e.preventDefault();
        registrarExamen(data).then(response => {
            console.log('Se registró la profesión con éxito ', response);
            window.localStorage.setItem("token_seguridad", response.data.token);
        })

        console.log("Datos del usuario: ", data)
    }
    
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
                    <form style={styles.form}>

                    <CardContent>
                        
                        <Grid container spacing={3}>

                            <Grid item xs={12} md={9}>
                                <TextField name="descripcionCorta" variant="outlined" value={data.examen.descripcionCorta} onChange={ingresarValores} fullWidth label="Nombre del examen" />
                            </Grid>

                            <Grid item xs={12} md={3}>
                                <TextField
                                    fullWidth
                                    label="Confidencial"
                                    name="confidencial"
                                    required
                                    select
                                    onChange={ingresarValores}
                                    value = {data.examen.confidencial}
                                    SelectProps={{ native: true }}
                                    variant="outlined"
                                    >

                                    <option value="0">Seleccione...</option>
                                    <option value="Si">Si Confidencial</option>
                                    <option value="No">No Confidencial</option>

                                </TextField>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Área de servicio"
                                    name="idAreaServ"
                                    required
                                    select
                                    onChange={ingresarValores}
                                    value = {data.examen.idAreaServ}
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

                            <Grid item xs={12} md={6}>
                                <TextField
                                    fullWidth
                                    label="Categoría"
                                    name="idCategoriaExamenes"
                                    required
                                    select
                                    onChange={ingresarValores}
                                    value = {data.examen.idCategoriaExamenes}
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

                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
                                    label="Tipo de muestra"
                                    name="idTipoMuestra"
                                    required
                                    select
                                    onChange={ingresarValores}
                                    value = {data.examen.idTipoMuestra}
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

                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
                                    label="Unidad de medida"
                                    name="idUnidadMedidas"
                                    required
                                    select
                                    onChange={ingresarValores}
                                    value = {data.examen.idUnidadMedidas}
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

                            <Grid item xs={12} md={4}>
                                <TextField
                                    fullWidth
                                    label="Tipo de resultado"
                                    name="idTipoResultado"
                                    required
                                    select
                                    onChange={ingresarValores}
                                    value = {data.examen.idTipoResultado}
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
                                <TextField name="descripcion" value={data.examen.descripcion} onChange={ingresarValores} variant="outlined" fullWidth label="Descripción" />
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
                            <Button type="submit" onClick={registrarExamenButton} fullWidth variant="contained" color="primary">
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

export default RegistrarExamen;