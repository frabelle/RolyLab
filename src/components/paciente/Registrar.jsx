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
import { registrarPaciente } from '../../actions/PacienteAction';
import { RestorePageRounded } from '@mui/icons-material';

const RegistrarPaciente = () =>{

    const [data, setData] = useState({
        identificacion: [],
        sexo: [],
        tiposangre: [],
        profesiones: [],
        religion2: [],
        nacionalidad: [],
        departamento: [],
        pais: [],
        paciente: []
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

    const registrarPacienteButton= e => {
        e.preventDefault();
        registrarPaciente(data).then(response => {
            console.log('Se registró la profesión con éxito ', response);
            window.localStorage.setItem("token_seguridad", response.data.token);
        })
        
        console.log("Datos del usuario: ", data)
    }
    
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
                religion2: response.data
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
                    <form style={styles.form}>
                    <CardContent>
                        
                            <Grid container spacing={3}>
                                
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Identificación"
                                        name="idIdentificacion"
                                        required
                                        select
                                        value={data.paciente.idIdentificacion} 
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
                                    <TextField name="numIdentificacion" value={data.paciente.numIdentificacion} 
                                        onChange={ingresarValores} variant="outlined" fullWidth label="Número de identificación" />
                                </Grid>
                                
                                <Grid item xs={12} md={3}>
                                    <TextField name="primerNombre" value={data.paciente.primerNombre} 
                                        onChange={ingresarValores} variant="outlined" fullWidth label="Primer nombre" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField name="segundoNombre" value={data.paciente.segundoNombre} 
                                        onChange={ingresarValores} variant="outlined" fullWidth label="Segundo nombre" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField name="primerApellido" value={data.paciente.primerApellido} 
                                        onChange={ingresarValores} variant="outlined" fullWidth label="Primer apellido" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField name="segundoApellido" value={data.paciente.segundoApellido} 
                                        onChange={ingresarValores} variant="outlined" fullWidth label="Segundo apellido" />
                                </Grid>

                                <Grid item xs={12} md={6}>
                              <TextField
                                  name="fechaNac"
                                  label="Fecha de nacimiento"
                                  type="date"
                                  defaultValue=""
                                  value={data.paciente.fechaNac} 
                                  onChange={ingresarValores}
                                  sx={{ width: 450 }}
                                  InputLabelProps={{
                                  shrink: true,
                                 }}
                             />
                                </Grid>
                                 
                                <Grid item xs={12} md={6}>
                                    <TextField name="numInss" value={data.paciente.numInss} 
                                  onChange={ingresarValores} variant="outlined" fullWidth label="Número de INSS" />
                                </Grid>
                                 
                                <Grid item xs={12} md={6}>
                                    <TextField name="email" value={data.paciente.email} 
                                  onChange={ingresarValores} variant="outlined" fullWidth label="Email" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField name="telefonoDomiciliar" value={data.paciente.telefonoDomiciliar} 
                                  onChange={ingresarValores} variant="outlined" fullWidth label="Teléfono domiciliar" />
                                </Grid>

                                <Grid item xs={12} md={3}>
                                    <TextField name="telefonoMovil" value={data.paciente.telefonoMovil} 
                                  onChange={ingresarValores} variant="outlined" fullWidth label="Teléfono móvil" />
                                </Grid>


                                <Grid item xs={12} md={3}>
                                    <TextField
                                        fullWidth
                                        label="Sexo"
                                        name="idSexo"
                                        required
                                        select
                                        value={data.paciente.idSexo} 
                                        onChange={ingresarValores}
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
                                        name="idTipoSangre"
                                        required
                                        select
                                        value={data.paciente.idTipoSangre} 
                                        onChange={ingresarValores}
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
                                        name="idProfesiones"
                                        required
                                        select
                                        value={data.paciente.idProfesiones} 
                                        onChange={ingresarValores}
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
                                        name="religion"
                                        required
                                        select
                                        value={data.paciente.religion} 
                                        onChange={ingresarValores}
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>

                                        {data.religion2.map((id) => {
                                            return (
                                                <option
                                                    key={id.idReigion}
                                                    value={id.idReigion} text="buenas">

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
                                        value={data.paciente.idPaisNac} 
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
                                        label="Departamento de nacionalidad"
                                        name="idDepartamentoNac"
                                        required
                                        select
                                        value={data.paciente.idDepartamentoNac} 
                                        onChange={ingresarValores}
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
                                        name="idPaisRes"
                                        required
                                        select
                                        value={data.paciente.idPaisRes} 
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
                                        label="Departamento de residencia"
                                        name="idDepartamentoRes"
                                        required
                                        select
                                        value={data.paciente.idDepartamentoRes} 
                                        onChange={ingresarValores}
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
                                    <TextField name="direccionDomiciliar" value={data.paciente.direccionDomiciliar} 
                                        onChange={ingresarValores} variant="outlined" fullWidth label="Dirección domiciliar" />
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        label="Activo"
                                        name="activo"
                                        required
                                        select
                                        value={data.paciente.activo} 
                                        onChange={ingresarValores}
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >
                                            <option value="0">Seleccione...</option>
                                            <option value="Si">Si</option>
                                            <option value="No">No</option>
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        label="Embarazada"
                                        name="emabrazada"
                                        required
                                        select
                                        value={data.paciente.emabrazada} 
                                        onChange={ingresarValores}
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                        
                                    </TextField>
                                </Grid>

                                <Grid item xs={12} md={4}>
                                    <TextField
                                        fullWidth
                                        label="Fallecido"
                                        name="fallecido"
                                        required
                                        select
                                        value={data.paciente.fallecido} 
                                        onChange={ingresarValores}
                                        SelectProps={{ native: true }}
                                        variant="outlined"
                                        >

                                        <option value="0">Seleccione...</option>
                                        <option value="Si">Si</option>
                                        <option value="No">No</option>
                                        
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
                            <Button type="submit" onClick={registrarPacienteButton} fullWidth variant="contained" color="primary">
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

export default RegistrarPaciente;