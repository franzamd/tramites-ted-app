import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Button,
  Divider,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import People from "@material-ui/icons/People";
import Visibility from "@material-ui/icons/Visibility";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  statsItem: {
    alignItems: "center",
    display: "flex",
  },
  statsIcon: {
    marginRight: theme.spacing(1),
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const AreaCard = ({ className, product, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box display="flex" justifyContent="center" mb={3}>
          <Avatar
            alt="Product"
            src={product.media}
            variant="square"
            className={classes.large}
          />
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {product.title}
        </Typography>
        <Typography align="center" color="textPrimary" variant="body1">
          {product.description}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid container justify="space-between" spacing={2}>
          <Grid className={classes.statsItem} item>
            <Button
              onClick={() => navigate("/app/areas/area-detalles")}
              variant="contained"
              color="primary"
              startIcon={<Visibility />}
            >
              Ver Detalles
            </Button>
          </Grid>
          <Grid className={classes.statsItem} item>
            <People className={classes.statsIcon} color="action" />
            <Typography color="textSecondary" display="inline" variant="body2">
              {product.activePersonal} personal
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

AreaCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired,
};

export default AreaCard;
