import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Page from 'src/components/Page';
import Process from './Process';
import ProcessDetails from './ProcessDetails';
import ProcessRoute from './ProcessRoute';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const ProcessView = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="ProcessView">
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item lg={12} md={12} xs={12}>
            <Process />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <ProcessRoute />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <ProcessDetails titlesection="PRIMER DESTINATARIO" />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <ProcessDetails titlesection="SEGUNDO DESTINATARIO" />
          </Grid>
          <Grid item lg={12} md={12} xs={12}>
            <ProcessDetails titlesection="TERCER DESTINATARIO" />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default ProcessView;
