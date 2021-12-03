import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

// material
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';


// ----------------------------------------------------------------------

const NEWS = [ 
  {
    title: "Nuevas muestras llegaron al laboratorio central",
    description: "Alrededor de 40 muestras de sangre llegaron",
    image: "https://i.pinimg.com/originals/09/4f/8d/094f8da916951133205b400684f6d8e6.png",
    postedAt: "hace 2 horas"
  },
  {
    title: "Anuncio importante para personal de RolyLab",
    description: "El día Miércoles 8 de Diciembre no se trabajará",
    image: "https://image.freepik.com/vector-gratis/atraccion-atencion-anuncio-o-advertencia-importante-intercambio-informacion-ultimas-noticias-altavoz-megafono-megafono-signo-exclamacion_335657-2387.jpg",
    postedAt: "hace 3 horas"
  },
  {
    title: "Reunión con el médico Felipe Morales",
    description: "Conservar sobre el mantenimiento de equipos",
    image: "https://cdn-icons-png.flaticon.com/512/1869/1869935.png",
    postedAt: "hace 3 horas"
  },
  {
    title: "Tiene una cita médica con la paciente Ruth López",
    description: "Cita agendada para el 04 de Diciembre a las 13:00",
    image: "https://isanidad.com/wp-content/uploads/2018/02/Aplicaciones_m%C3%A9dicas_m%C3%B3viles.jpg",
    postedAt: "hace 4 horas"
  },
  {
    title: "Reunión virtual con el médico Juan Solís",
    description: "Hablar sobre los cambios en el laboratorio",
    image: "https://cdn-icons-png.flaticon.com/512/1869/1869935.png",
    postedAt: "hace 4 horas"
  },
  {
    title: "Tiene un mensaje del paciente Luis Castellón",
    description: "Ha recibido un mensaje en su correo de un paciente",
    image: "https://media.istockphoto.com/vectors/new-notification-email-notification-flat-banner-incoming-message-vector-id1271748762?k=20&m=1271748762&s=170667a&w=0&h=jsPjmJj3jn53-ppRuhEqvTYudkm-k1T7n7tztPJQI7w=",
    postedAt: "hace 5 horas"
  },
  {
    title: "Anuncio importante para el personal de RolyLab",
    description: "El día sábado se trabajará hasta el medio día",
    image: "https://image.freepik.com/vector-gratis/atraccion-atencion-anuncio-o-advertencia-importante-intercambio-informacion-ultimas-noticias-altavoz-megafono-megafono-signo-exclamacion_335657-2387.jpg",
    postedAt: "hace 8 horas"
  },

];

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.object.isRequired
};

function NewsItem({ news }) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 50, height: 50, borderRadius: 1.5 }}
      />
      <Box sx={{ minWidth: 350 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {postedAt}
      </Typography>
    </Stack>
  );
}

export default function AppNewsUpdate() {
  return (
    <Card>
      <CardHeader title="Nuevas notificaciones" />

      <Stack spacing={3} sx={{ p: 3, pr: 0 }} style={{marginTop: '-20px'}}>
          {NEWS.map((news) => (
            <NewsItem key={news.title} news={news} />
          ))}
        </Stack>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
        >
          Ver todas
        </Button>
      </Box>
    </Card>
  );
}