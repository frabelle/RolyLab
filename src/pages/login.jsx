import { useFormik } from 'formik';
import { Box, Card, CardContent, CardMedia, Container, Button, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { margin } from '@mui/system';
import IniciarSesion from '../components/authentication/login'

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: 'renchifrabelle@gmail.com',
      password: '123456789'
    }
  });

  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flexGrow: 1,
          minHeight: '100%',
          margin: '45px',
        }}
      >
        <Container maxWidth="sm">
          <IniciarSesion/>
        </Container>
      </Box>
    </>
  );
};

export default Login;