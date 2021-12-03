import PropTypes from 'prop-types';
// material
import { Card, Typography, CardHeader, CardContent, Divider, Box, Grid, Button } from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineContent,
  TimelineConnector,
  TimelineSeparator,
  TimelineDot
} from '@mui/lab';
// utils

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    title: 'Se ha reprogramado la cita para la paciente Ruth López',
    time: '02 Dic 2021 11:37',
    type: 'order1'
  },
  {
    title: 'Se ha procesado la órden de Carlos Herrera',
    time: '02 Dic 2021 13:15',
    type: 'order2'
  },
  {
    title: 'Se hizo entrega todos los exámenes del día Martes',
    time: '02 Feb 2021 12:57',
    type: 'order3'
  },
  {
    title: 'Se ha creado una nueva órden para el paciente Luis Castellón',
    time: '01 Dic 2021 08:45',
    type: 'order4'
  },
  {
    title: 'Se ha creado una nueva órden para el paciente Yaró Flores',
    time: '01 Dic 2021 08:45',
    type: 'order4'
  },
  {
    title: 'La paciente Odalys Icaza canceló su cita programada el día 03 de Dic 11:30',
    time: '01 Dic 2021 08:45',
    type: 'order5'
  }
];

// ----------------------------------------------------------------------

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool
};

function OrderItem({ item, isLast }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (type === 'order1' && 'primary.main') ||
              (type === 'order2' && 'success.main') ||
              (type === 'order3' && 'info.main') ||
              (type === 'order4' && 'warning.main') ||
              'error.main'
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {time}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function AppOrderTimeline() {
  return (
    <Card
      sx={{
        '& .MuiTimelineItem-missingOppositeContent:before': {
          display: 'none'
        }
      }}
    >
      <CardHeader title="Procedimientos del sistema" />

      <CardContent style={{marginTop: '-60px', marginBottom: '6px'}}>
        <Timeline>
          {TIMELINES.map((item, index) => (
            <OrderItem key={item.title} item={item} isLast={index === TIMELINES.length - 1} />
          ))}
        </Timeline>
      </CardContent>

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