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
import { obtenerSexos } from '../../actions/SexoAction';
import { obtenerIdentificacion } from '../../actions/IdentificacionAction';
import { obtenerSucursal } from '../../actions/SucursalAction';
import { obtenerNacionalidad } from '../../actions/NacionalidadAction';
import { obtenerDepartamento } from '../../actions/DepartamentoAction';
import { obtenerPais } from '../../actions/PaisAction';
import { obtenerEstadoCivil } from '../../actions/EstadoCivil';
  

const RegistrarMedico = () =>{

    const [data, setData] = useState({
        sexos: [],
        identificacion: [],
        sucursal: [],
        nacionalidad: [],
        departamento: [],
        pais: [],
        estadoCivil: []
    })

    useEffect(() => {
        consultarExamenes();   
    }, []);
    
    const consultarExamenes = () =>{
    
        obtenerSexos().then((response) =>{
            setData((antes) =>({
                ...antes,
                sexos: response.data
            }))
        })

        obtenerIdentificacion().then((response) =>{
            setData((antes) => ({
                ...antes,
                identificacion: response.data
            }))
        })

        obtenerSucursal().then((response) => {
            setData((antes) => ({
                ...antes,
                sucursal: response.data
            }))
        })

        obtenerNacionalidad().then((response) =>{
            setData((antes) => ({
                ...antes,
                nacionalidad: response.data
            }))
        })

        obtenerDepartamento().then((response) =>{
            setData((antes) => ({
                ...antes,
                departamento: response.data
            }))
        })

        obtenerPais().then((response) =>{
            setData((antes) => ({
                ...antes,
                pais: response.data
            }))
        })

        obtenerEstadoCivil().then((response) =>{
            setData((antes) => ({
                ...antes,
                estadoCivil: response.data
            }))
        })

    }


    return(
        <Container component="main" maxWidth="lg" justify = "center">
            <div style={styles.paper}>

                <Card>

                    <CardHeader
                    subheader="Añadiendo un nuevo registro de médico"
                    title="Médico"
                    />

                    <Divider />

                    <CardContent>
                        <form style={styles.form}>
                            <Grid container spacing={3}>

                                <Grid item xs={12} md={6}>
                                    <TextField name="nombre" variant="outlined" fullWidth label="Nombres" />
                                </Grid>
                                
                                <Grid item xs={12} md={6}>
                                    <TextField name="apellido" variant="outlined" fullWidth label="Apellidos" />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <TextField
                                        id="date"
                                        label="Fecha de nacimiento"
                                        type="date"
                                        sx={{ width: 290 }}
                                        defaultValue=""
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <TextField name="email" variant="outlined" fullWidth label="Email" />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <TextField name="telef" variant="outlined" fullWidth label="Teléfono" />
                                </Grid>     

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

                                        <option value="0">Seleccione...</option>
                                        {data.identificacion.map((id) => {
                                            return (
                                                <option
                                                    key={id.idIdentificacion}
                                                    value={id.idIdentificacion}>
                                                    {id.descripcion}
                                                </option>   
                                            );
                                        })}
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField name="numidenti" variant="outlined" fullWidth label="Número de identificación" />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField name="codminsa" variant="outlined" fullWidth label="Código de minsa" />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Sucursal"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>
                                        {data.sucursal.map((id) => {
                                            return (
                                                <option
                                                    key={id.idSucursal}
                                                    value={id.idSucursal}>
                                                    {id.descripcion}
                                                </option>   
                                            );
                                        })}
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Departamento de nacionalidad"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>
                                        {data.departamento.map((id) => {
                                            return (
                                                <option
                                                    key={id.idDepartamento}
                                                    value={id.idDepartamento}>
                                                    {id.descripcion}
                                                </option>   
                                            );
                                        })}
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Departamento de residencia"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        
                                        <option value="0">Seleccione...</option>
                                        {data.departamento.map((id) => {
                                            return (
                                                <option
                                                    key={id.idDepartamento}
                                                    value={id.idDepartamento}>
                                                    {id.descripcion}
                                                </option>   
                                            );
                                        })}
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="País de nacionalidad"
                                        name="state"
                                        required
                                        select
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
                                    <TextField
                                        fullWidth
                                        label="País de residencia"
                                        name="state"
                                        required
                                        select
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
                                    <TextField
                                        fullWidth
                                        label="Estado civil"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>
                                        {data.estadoCivil.map((id) => {
                                            return (
                                                <option
                                                    key={id.idEstadoCivil}
                                                    value={id.idEstadoCivil}>
                                                    {id.descripcion}
                                                </option>   
                                            );
                                        })}
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Sexo"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>
                                        {data.sexos.map((id) => {
                                            return (
                                                <option
                                                    key={id.idSexo}
                                                    value={id.idSexo}>
                                                    {id.descripcion}
                                                </option>   
                                            );
                                        })}
                                        
                                    </TextField>
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

export default RegistrarMedico;