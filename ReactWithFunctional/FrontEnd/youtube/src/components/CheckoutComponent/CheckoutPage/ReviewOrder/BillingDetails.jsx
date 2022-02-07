import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import useStyles from './styles';

function BillingDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { firstName2, lastName2, address2 } = formValues;
  return (
    <Grid item xs={12} sm={6}>
      <Typography variant="h6" gutterBottom className={classes.title}>
       Billing
      </Typography>
      <Typography gutterBottom>{`${firstName2} ${lastName2}`}</Typography>
      <Typography gutterBottom>{`${address2}`}</Typography>
    </Grid>
  );
}

export default BillingDetails;
