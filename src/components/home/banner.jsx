import * as React from 'react';
import Welcome from '../../static/images/welcome.png'
import Banner from '../../static/images/banner.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box, Grid, Container, Typography } from '@mui/material';
import { textAlign } from '@mui/system';

export default function MediaCard() {
  return (

    <Grid container spacing={0} style={{ marginTop:'15px', height:'100%'}}>

        <Grid item xs={12} md={6} lg={6} style=
            {{height: '550px', 
            textAlign: 'left', 
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'}}>

            <div style={{textAlign:'left', margin:'40px', marginLeft:'100px'}}>

                <Grid container spacing={3}>

                    <Grid item xs={12} md={12} lg={12}>
                        <Typography variant="h2">Bienvenido a RolyLab</Typography>    
                    </Grid>
                    
                    <Grid item xs={12} md={12} lg={12}>
                        <Typography variant="h7">En RolyLab puedes gestionar exámenes, pacientes, médicos y muchos registro más de tu laboratorio en un sólo lugar</Typography>
                    </Grid>
                    
                    <Grid item xs={12} md={12} lg={12}>
                        <Button variant="contained" >Empezar ahora</Button>    
                    </Grid>

                </Grid>

            </div>
            
        </Grid>


        <Grid item xs={12} md={6} lg={4} style=
            {{height: '500px',
            alignItems: 'left',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'}}>

            <img
                src={Banner}
                alt="imagen de prueba"
                width="150%"
            />

        </Grid>

    </Grid>

    
  );
}