import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Grid, Container, Typography } from '@mui/material';

export default function MediaCard() {
  return (

    <Grid  container spacing={3}>

        <Grid item xs={12} md={6} lg={4}>

            <Card>

                <CardMedia
                    component="img"
                    height="180"
                    image="https://img.freepik.com/vector-gratis/banner-concepto-medico-paciente-personajes-consulta-pacientes_126283-2141.jpg?size=626&ext=jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Pacientes
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Gestiona los pacientes de RolyLab que estarán utilizando de sus servicios en citas médicas y exámenes
                    </Typography>
                </CardContent>

                <CardActions style={{textAlign: 'right', marginTop: '-20px'}}>
                    <Button size="small">Ir al módulo</Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>

            <Card>

                <CardMedia
                    component="img"
                    height="180"
                    image="https://image.freepik.com/vector-gratis/doctor-mascara-estetoscopio-concepto-control-coronavirus_256722-67.jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Médicos
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Los médicos se encargan de brindar atención a los pacientes por citas previamentes agendadas en el sistema
                    </Typography>
                </CardContent>

                <CardActions style={{textAlign: 'right', marginTop: '-20px'}}>
                    <Button size="small">Ir al módulo</Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={12} md={6} lg={4}>

            <Card>

                <CardMedia
                    component="img"
                    height="180"
                    image="https://img.freepik.com/vector-gratis/registro-medico-donante-sangre-hombre-voluntario-enfermero-donacion-o-analisis-transfusiones-ilustracion-centro-salud_53562-10488.jpg?size=626&ext=jpg"
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    Exámenes
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Registra los exámenes de cada paciente según con su valor normal y el valor analizado por el laboratorista
                    </Typography>
                </CardContent>

                <CardActions style={{textAlign: 'right', marginTop: '-20px'}}>
                    <Button size="small">Ir al módulo</Button>
                </CardActions>
            </Card>
        </Grid>

    </Grid>

    
  );
}