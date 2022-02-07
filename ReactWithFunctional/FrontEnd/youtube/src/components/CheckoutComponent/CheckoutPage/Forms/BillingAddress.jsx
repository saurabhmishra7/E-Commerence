import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { InputField, CheckboxField, SelectField } from '../../FormFields';

const cities = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '1',
    label: 'New York'
  },
  {
    value: '2',
    label: 'Chicago'
  },
  {
    value: '3',
    label: 'Saigon'
  }
];

const states = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: '11',
    label: 'Florida'
  },
  {
    value: '22',
    label: 'Michigan'
  },
  {
    value: '33',
    label: 'Texas'
  }
];

const countries = [
  {
    value: null,
    label: 'None'
  },
  {
    value: '111',
    label: 'United States'
  },
  {
    value: '222',
    label: 'Italy'
  },
  {
    value: '333',
    label: 'Vietnam'
  }
];

export default function BillingAddressForm(props) {
  const {
    formField: {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      zipcode,
      country,
    }
  } = props;
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Billing address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputField name={firstName.name2} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={lastName.name2} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address1.name2} label={address1.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={address2.name2} label={address2.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name2}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name2}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={zipcode.name2} label={zipcode.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name2}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
