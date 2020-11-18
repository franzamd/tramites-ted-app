import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const states = [
  {
    value: 'urgente',
    label: 'URGENTE'
  },
  {
    value: 'para su información',
    label: 'PARA SU INFORMACIÓN'
  },
  {
    value: 'emitir informe',
    label: 'EMITIR INFORME'
  },
  {
    value: 'coordinar con',
    label: 'COORDINAR CON'
  },
  {
    value: 'preparar respuesta',
    label: 'PREPARAR RESPUESTA'
  },
  {
    value: 'archivar',
    label: 'ARCHIVAR'
  },
  {
    value: 'otros',
    label: 'OTROS'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProcessDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    dispatchDate: '30/09/2020',
    dispatchHour: '11:00',
    to: 'Lic Pavel Sanchez',
    from: 'JAF',
    object: 'Efectuar el compromiso presupuestario/preventivo correspondiente',
    signature: 'Lic. Judith Mollo Quispe',
    nSheetsReceived: '5',
    dispatchHourReceived: '18:03',
    signatureReceived: 'Lic. Pavel Sanchez Bejarano'
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
        <CardHeader
          subheader="La información puede ser modificada"
          title={rest.titlesection}
        />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                helperText="Fecha de Despacho"
                label="Fecha de despacho"
                name="dispatchDate"
                onChange={handleChange}
                required
                value={values.dispatchDate}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Hora"
                name="dispatchHour"
                onChange={handleChange}
                required
                value={values.dispatchHour}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="PARA"
                name="to"
                onChange={handleChange}
                required
                value={values.to}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="DE"
                name="from"
                onChange={handleChange}
                required
                value={values.from}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="MEDIDA"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item lg={12} md={12} xs={12}>
              <TextField
                rows={4}
                rowsMax={4}
                multiline={true}
                fullWidth
                label="OBJETO"
                name="object"
                onChange={handleChange}
                required
                value={values.object}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                disabled={true}
                fullWidth
                label="Firma"
                name="signature"
                onChange={handleChange}
                required
                value={values.signature}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                disabled={true}
                fullWidth
                label="Hora"
                name="dispatchHourReceived"
                onChange={handleChange}
                required
                value={values.dispatchHourReceived}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                disabled={true}
                fullWidth
                label="Nº Hojas"
                name="nSheetsReceived"
                onChange={handleChange}
                required
                value={values.nSheetsReceived}
                variant="outlined"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                disabled={true}
                fullWidth
                label="Firma Recepción"
                name="signatureReceived"
                onChange={handleChange}
                required
                value={values.signatureReceived}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <Button color="primary" variant="contained" startIcon={<SaveIcon />}>
            Guardar cambios
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProcessDetails.propTypes = {
  className: PropTypes.string
};

export default ProcessDetails;
