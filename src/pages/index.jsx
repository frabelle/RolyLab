import Navbar from '../components/menu/navbar'
import { Box, Grid, Container, Typography, Divider } from '@mui/material';
import AppNewsUpdate from '../components/index/AppNewsUpdate';
import AppOrderTimeline from '../components/index/AppOrderTimeline';
import Cards from '../components/index/AppCards'

const Home = () => {

  return (

    <Container maxWidth="xl">
      <Box sx={{ pb: 5, py:4 }}>
        <Typography variant="h5">¡Hola, bienvenido de nuevo a RolyLab!</Typography>
      </Box>
      <Grid container spacing={3}>

        <Grid item xs={12} md={6} lg={12}>
            <Cards/>
        </Grid>

        <Divider/>

        <Grid item xs={12} md={6} lg={7}>
            <AppNewsUpdate />
        </Grid>

        <Grid item xs={12} md={6} lg={5}>
          <AppOrderTimeline />
        </Grid>

      </Grid>
    </Container>
  );
}

export default Home;