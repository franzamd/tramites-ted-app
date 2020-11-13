import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {

  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {},
  titleSection: {
    textAlign: 'center',
    marginTop: 20
  }
}));

const ProcessRoute = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    dateInitalize: '30/09/2020',
    hourInitialize: '10:00',
    nSheets: '7',
    phone: '',
    state: 'Tarija',
    cite: 'CERTIFICACIÓN POA-3 Nº265',
    dateCite: '30/09/2020',
    origin: 'Ing. Fernando Cortez - TIC',
    observations: ''
  });

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <Typography className={classes.titleSection} variant="h3">
          TRIBUNAL ELECTORAL DEPARTAMENTAL DE TARIJA
        </Typography>
        <Typography className={classes.titleSection} variant="h4">
          HOJA DE RUTA Nº 351
        </Typography>
        <CardHeader title="DATOS DE RECEPCION" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                disabled={true}
                fullWidth
                helperText="Ingrese fecha de ingreso"
                label="Fecha de ingreso"
                name="dateInitalize"
                onChange={handleChange}
                required
                value={values.dateInitalize}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                disabled={true}
                fullWidth
                label="Hora"
                name="hourInitialize"
                onChange={handleChange}
                required
                value={values.hourInitialize}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                disabled={true}
                fullWidth
                label="Nº Hojas"
                name="nSheets"
                onChange={handleChange}
                required
                value={values.nSheets}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                disabled={true}
                fullWidth
                label="Cite"
                name="cite"
                onChange={handleChange}
                required
                value={values.cite}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                disabled={true}
                fullWidth
                label="Fecha del Cite"
                name="dateCite"
                onChange={handleChange}
                required
                value={values.dateCite}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                disabled={true}
                fullWidth
                label="Procedencia"
                name="origin"
                onChange={handleChange}
                required
                value={values.origin}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        {/* <Box display="flex" justifyContent="flex-end" p={2}>
          <Button color="primary" variant="contained" startIcon={<SaveIcon />}>
            Guardar cambios
          </Button>
        </Box> */}
      </Card>
    </form>
  );
};

ProcessRoute.propTypes = {
  className: PropTypes.string
};

export default ProcessRoute;
