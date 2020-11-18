import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';

const user = {
  avatar: '/static/images/processes/file.png',
  city: 'TED',
  country: 'Tarija',
  description: 'CABLEADO ESTRUCTURADO PARA 30 PUNTOS - RED DE COMPUTO',
  name: 'Nº 481 ',
  timezone: 'GTM-4',
  area: 'TIC'
};

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const Process = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar
            className={classes.avatar}
            variant="square"
            src={user.avatar}
          />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            Descripción: {`${user.description}`}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            Solicitado por área: {`${user.area}`}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="primary"
          fullWidth
          variant="text"
          startIcon={<DoneAllIcon />}
        >
          Completar Trámite
        </Button>
      </CardActions>
    </Card>
  );
};

Process.propTypes = {
  className: PropTypes.string
};

export default Process;
