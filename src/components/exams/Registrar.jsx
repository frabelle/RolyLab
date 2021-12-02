import { Button, Container, Grid, TextField, MenuItem} from '@mui/material';
import React, { Component } from 'react';
import styles from '../tools/Styles';
import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Divider
  } from '@mui/material';

  class RegistrarExamen extends Component {

    state = {
        category: [],
        muestras: [],
        medidas: [],
        result:  [],
        area: [],
      }
    
      componentDidMount(){
        this.consultarExamenes();  
      }
    
      consultarExamenes = async () =>{
        const url = `https://localhost:44342/api/CategoriaExamenes`;
        const url2 = `https://localhost:44342/api/TipoMuestras`;
        const url3 = `https://localhost:44342/api/UnidadMedidas`;
        const url4 = `https://localhost:44342/api/TipoResultado`;
        const url5 = `https://localhost:44342/api/AreaServicios`;
    
        const respuesta = await fetch(url);
        const respuesta2 = await fetch(url2);
        const respuesta3 = await fetch(url3);
        const respuesta4 = await fetch(url4);
        const respuesta5 = await fetch(url5);

        const category = await respuesta.json();
        const muestras = await respuesta2.json();
        const medidas = await respuesta3.json();
        const result = await respuesta4.json();
        const area = await respuesta5.json();
        
        this.setState({
          category: category,
          muestras: muestras,
          medidas: medidas,
          result: result,
          area: area,
        });
      }

    render(){
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
                                        
                                        {this.state.area.map((exam) => (
                                            <option
                                                key={exam.IdAreaServ}
                                                value={exam.IdAreaServ}
                                            >
                                                {exam.descripcion}
                                            </option>
                                        ))}
                                    
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
                                        
                                        {this.state.category.map((exam) => (
                                            <option
                                                key={exam.idCategoriaExamenes}
                                                value={exam.idCategoriaExamenes}
                                            >
                                                {exam.descripcion}
                                            </option>
                                        ))}
                                    
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
                                        
                                        {this.state.muestras.map((exam) => (
                                            <option
                                                key={exam.idTipoMuestra}
                                                value={exam.idTipoMuestra}
                                            >
                                                {exam.descripcion}
                                            </option>
                                        ))}
                                    
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
                                        
                                        {this.state.medidas.map((exam) => (
                                            <option
                                                key={exam.idUnidadMedidas}
                                                value={exam.idUnidadMedidas}
                                            >
                                                {exam.unidadMedida}
                                            </option>
                                        ))}
                                    
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
                                        
                                        {this.state.result.map((exam) => (
                                            <option
                                                key={exam.idTipoResultado}
                                                value={exam.idTipoResultado}
                                            >
                                                {exam.descripcion}
                                            </option>
                                        ))}
                                    
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

    )}
}

export default RegistrarExamen;