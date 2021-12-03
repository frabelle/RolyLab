import { useFormik } from 'formik';
import { Box, Card, CardContent, CardMedia, Container, Button, Link, TextField, Typography, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import { margin } from '@mui/system';

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
      <form onSubmit={formik.handleSubmit}>

            <Card>

                <CardMedia
                    component="img"
                    height="150"
                    image="https://nosinmiscookies.com/wp-content/uploads/2019/09/como-optimizar-banner-publicitario.jpg"
                    alt="Paella dish"
                />

                <CardContent>

                    <Box sx={{ my: 0 }}>
                        <Typography
                            color="textPrimary"
                            variant="h4"
                        >
                            Registrate
                        </Typography>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                        >
                        Registrate en la plataforma de RolyLab
                        </Typography>
                    </Box>

                    <Grid container spacing={3}>

                    <Grid item xs={12} md={6}>
                        <TextField
                            error={Boolean(formik.touched.firstName && formik.errors.firstName)}
                            fullWidth
                            helperText={formik.touched.firstName && formik.errors.firstName}
                            label="Primer nombre"
                            margin="normal"
                            name="firstName"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.firstName}
                            variant="outlined"
                            required
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <TextField
                            error={Boolean(formik.touched.lastName && formik.errors.lastName)}
                            fullWidth
                            helperText={formik.touched.lastName && formik.errors.lastName}
                            label="Segundo nombre"
                            margin="normal"
                            name="lastName"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.lastName}
                            variant="outlined"
                            required
                        />
                    </Grid>


                    </Grid>

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
                        required
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
                        required
                    />
                    <Box sx={{ py: 2 }}>
                        <Button
                            color="primary"
                            disabled={formik.isSubmitting}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                        >
                            Empezar ahora
                        </Button>
                    </Box>

                    <Typography
                        color="textSecondary"
                        variant="body2"
                        align="center"
                    >
                    ¿Ya tienes una cuenta?
                    {' '}
                        <Link
                        to="/login"
                        variant="subtitle2"
                        underline="hover"
                        sx={{
                            cursor: 'pointer'
                        }}
                        >
                        Inicia sesión
                        </Link>
                    </Typography>

                </CardContent>


            </Card>

          </form>
    </>
  );
};

export default Login;