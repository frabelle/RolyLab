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
import { registrarMedico } from '../../actions/MedicoAction';
  

const RegistrarMedico = () =>{

    const [data, setData] = useState({
        sexos: [],
        identificacion: [],
        sucursal: [],
        nacionalidad: [],
        departamento: [],
        pais: [],
        estadoCivil: [],
        medico: []
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

    const registrarMedicosButton= e => {
        e.preventDefault();
        registrarMedico(data).then(response => {
            console.log('Se registró la profesión con éxito ', response);
            window.localStorage.setItem("token_seguridad", response.data.token);
        })
        
        console.log("Datos del usuario: ", data)
    }
    
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
                    <form style={styles.form}>
                    <CardContent>
                        
                            <Grid container spacing={3}>

                                <Grid item xs={12} md={6}>
                                    <TextField name="nombres" value={data.medico.nombres} onChange={ingresarValores} variant="outlined" fullWidth label="Nombres" />
                                </Grid>
                                
                                <Grid item xs={12} md={6}>
                                    <TextField name="apellidos" value={data.medico.apellidos} onChange={ingresarValores} variant="outlined" fullWidth label="Apellidos" />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <TextField
                                        id="fechaNac"
                                        label="Fecha de nacimiento"
                                        type="date"
                                        sx={{ width: 290 }}
                                        value={data.medico.fechaNac}
                                        onChange={ingresarValores}
                                        defaultValue=""
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                    />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <TextField name="email" value={data.medico.email} onChange={ingresarValores} variant="outlined" fullWidth label="Email" />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <TextField name="telefono" value={data.medico.telefono} onChange={ingresarValores} variant="outlined" fullWidth label="Teléfono" />
                                </Grid>     

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="idIdentificacion"
                                        name="state"
                                        required
                                        select
                                        value={data.medico.idIdentificacion} 
                                        onChange={ingresarValores}
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
                                    <TextField name="numIdentificacion" value={data.medico.numIdentificacion} 
                                        onChange={ingresarValores} variant="outlined" fullWidth label="Número de identificación" />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField name="codMinsa" value={data.medico.codMinsa} 
                                        onChange={ingresarValores} variant="outlined" fullWidth label="Código de minsa" />
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Sucursal"
                                        name="idtblCatSucursales"
                                        required
                                        select
                                        value={data.medico.idtblCatSucursales} 
                                        onChange={ingresarValores}
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
                                        name="idDepartamentoNac"
                                        required
                                        select
                                        value={data.medico.idDepartamentoNac} 
                                        onChange={ingresarValores}
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
                                        name="idDepartamentoRes"
                                        required
                                        select
                                        value={data.medico.idDepartamentoRes} 
                                        onChange={ingresarValores}
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
                                        name="idPaisNac"
                                        required
                                        select
                                        value={data.medico.idPaisNac} 
                                        onChange={ingresarValores}
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
                                        name="idPaisRes"
                                        required
                                        select
                                        value={data.medico.idPaisRes} 
                                        onChange={ingresarValores}
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
                                        name="idEstadoCivil"
                                        required
                                        select
                                        value={data.medico.idEstadoCivil} 
                                        onChange={ingresarValores}
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
                                        name="idSexo"
                                        required
                                        select
                                        value={data.medico.idSexo} 
                                        onChange={ingresarValores}
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
                            <Button type="submit" onClick={registrarMedicosButton} fullWidth variant="contained" color="primary">
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

export default RegistrarMedico;