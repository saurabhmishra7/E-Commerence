import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function ShippingDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { firstName1, lastName1, address1 } = formValues;
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
        Shipping
      </Typography>
      <Typography gutterBottom>{`${firstName1} ${lastName1}`}</Typography>
      <Typography gutterBottom>{`${address1}`}</Typography>
    </Grid>
  );
}

export default ShippingDetails;
