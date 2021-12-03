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
import {obtenerIdentificacion} from '../../actions/IdentificacionAction'
import { obtenerSexos } from '../../actions/SexoAction';
import { obtenerTipoSangre } from '../../actions/TipoSangreAction';
import { obtenerProfesiones } from '../../actions/ProfesionesAction';
import { obtenerReligion } from '../../actions/ReligionAction';
import { obtenerNacionalidad } from '../../actions/NacionalidadAction';
import { obtenerDepartamento } from '../../actions/DepartamentoAction';
import { obtenerPais } from '../../actions/PaisAction';

const RegistrarPaciente = () =>{

    const [data, setData] = useState({
        identificacion: [],
        sexo: [],
        tiposangre: [],
        profesiones: [],
        religion: [],
        nacionalidad: [],
        departamento: [],
        pais: []
    })

    useEffect(() => {
        consultarExamenes();   
    }, []);
    
    const consultarExamenes = () =>{
    
        obtenerIdentificacion().then((response) => {
            setData((antes) =>({
                ...antes, 
                identificacion: response.data
            }));
        }) 

        obtenerSexos().then((response) => {
            setData((antes) =>({
                ...antes, 
                sexo: response.data
            }));
        })

        obtenerTipoSangre().then((response) =>{
            setData((antes) =>({
                ...antes,
                tiposangre: response.data     
            }));
        })

        obtenerProfesiones().then((response) =>{
            setData((antes) => ({
                ...antes,
                profesiones: response.data
            }))
        })

        obtenerReligion().then((response) => {
            setData((antes) => ({
                ...antes,
                religion: response.data
            }))
        })

        obtenerNacionalidad().then((response) => {
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

    }

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

                                <Grid item xs={12} md={6}>
                              <TextField
                                   id="date"
                                   label="Fecha de nacimiento"
                                   type="date"
                                  defaultValue=""
                                  sx={{ width: 450 }}
                                  InputLabelProps={{
                                  shrink: true,
                                 }}
                             />
                                </Grid>
                                 
                                <Grid item xs={12} md={6}>
                                    <TextField name="numInss" variant="outlined" fullWidth label="Número de INSS" />
                                </Grid>
                                 
                                <Grid item xs={12} md={6}>
                                    <TextField name="email" variant="outlined" fullWidth label="Email" />
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
                                        label="Sexo"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>

                                        {data.sexo.map((id) => {
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

                                        <option value="0">Seleccione...</option>

                                        {data.tiposangre.map((id) => {
                                            return (
                                                <option
                                                    key={id.idTipoSangre}
                                                    value={id.idTipoSangre}>
                                                    {id.descripcion}
                                                </option>   
                                            );
                                        })}
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        label="Profesión"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>

                                        {data.profesiones.map((id) => {
                                            return (
                                                <option
                                                    key={id.idProfesiones}
                                                    value={id.idProfesiones}>
                                                    {id.descripcion}
                                                </option>   
                                            );
                                        })}
                                        
                                    </TextField>
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

                                        <option value="0">Seleccione...</option>
                                        {data.religion.map((id) => {
                                            return (
                                                <option
                                                    key={id.idReigion}
                                                    value={id.idReigion}>
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
                                                    key={id.departamento}
                                                    value={id.departamento}>
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
                                                        key={id.departamento}
                                                        value={id.departamento}>
                                                        {id.descripcion}
                                                    </option>   
                                                );
                                            })}

                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={12}>
                                    <TextField name="direccion" variant="outlined" fullWidth label="Dirección domiciliar" />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        label="Activo"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >
                                            <option value="0">Seleccione...</option>
                                            <option value="1">Si</option>
                                            <option value="2">No</option>
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        label="Embarazada"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>
                                        <option value="1">Si</option>
                                        <option value="2">No</option>
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        label="Fallecido"
                                        name="state"
                                        required
                                        select
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>
                                        <option value="1">Si</option>
                                        <option value="2">No</option>
                                        
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

export default RegistrarPaciente;