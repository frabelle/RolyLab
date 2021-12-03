import { useFormik } from 'formik';
import { Box, Card, CardContent, CardMedia, Container, Button, Link, TextField, Typography, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { margin } from '@mui/system';
import Registrar from '../components/authentication/register'
import Styles from '../components/tools/Styles'

const Login = () => {
  const formik = useFormik({
    initialValues: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        policy: false
    }
  });

  return (
    <>
      <div>
        <Box
          component="main"
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            flexGrow: 1,
            minHeight: '100%',
            margin: '30px',
          }}
        >
          <Container maxWidth="sm">
            <Registrar/>
          </Container>
        </Box>
      </div>
    </>
  );
};

export default Login;