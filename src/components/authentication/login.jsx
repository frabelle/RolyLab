import { useFormik } from 'formik';
import { Box, Card, CardContent, CardMedia, Container, Button, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { margin } from '@mui/system';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: 'renchifrabelle@gmail.com',
      password: '123456789'
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
            <Card>

                <CardMedia
                    component="img"
                    height="150"
                    image="https://nosinmiscookies.com/wp-content/uploads/2019/09/como-optimizar-banner-publicitario.jpg"
                    alt="Paella dish"
                />

                <CardContent>

                    <Box sx={{ my: 3 }}>
                        <Typography
                            color="textPrimary"
                            variant="h4"
                        >
                            Iniciar sesión
                        </Typography>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                        >
                            Inicia sesión en la plataforma de RolyLab
                        </Typography>
                    </Box>

                    <TextField
                        error={Boolean(formik.touched.email && formik.errors.email)}
                        fullWidth
                        helperText={formik.touched.email && formik.errors.email}
                        label="Correo electrónico"
                        margin="normal"
                        name="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="email"
                        value={formik.values.email}
                        variant="outlined"
                    />

                    <TextField
                      error={Boolean(formik.touched.password && formik.errors.password)}
                      fullWidth
                      helperText={formik.touched.password && formik.errors.password}
                      label="Contraseña"
                      margin="normal"
                      name="password"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      type="password"
                      value={formik.values.password}
                      variant="outlined"
                    />

                    <Box sx={{ py: 2 }}>
                      <Button
                          color="primary"
                          disabled={formik.isSubmitting}
                          fullWidth
                          size="large"
                          variant="contained"
                      >
                         <Link to="../../pages/menu" style={{ textDecoration: 'none', color: '#ffffff' }}>Iniciar sesión</Link>
                      </Button>
                    </Box>

                    <Typography
                    color="textSecondary"
                    variant="body2"
                    align="center"
                    >
                    ¿No tienes una cuenta?
                    {' '}
                        <Link
                        to="../../pages/register"
                        variant="subtitle2"
                        underline="hover"
                        sx={{
                            cursor: 'pointer'
                        }}
                        >
                        Registrate
                        </Link>
                    </Typography>

                </CardContent>
            </Card>
          </form>
    </>
  );
};

export default Login;