import React from "react";
import { useFormikContext } from "formik";
import { Typography, Grid } from "@material-ui/core";
import ProductDetails from "./ProductDetails";
import ShippingDetails from "./ShippingDetails";
import PaymentDetails from "./PaymentDetails";
import BillingDetails from "./BillingDetails";

export default function ReviewOrder(props) {
  const { values: formValues } = useFormikContext();
  console.log(formValues);
  const { checkBoxFlag } = props;
  if (checkBoxFlag) {
    formValues.firstName2 = formValues.firstName1;
    formValues.lastName2 = formValues.lastName1;
    formValues.city2 = formValues.city1;
    formValues.address2 = formValues.address1;
    formValues.state2 = formValues.state1;
    formValues.country2 = formValues.country1;
    formValues.zipcode2 = formValues.zipcode1;
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <ProductDetails />
      <Grid container spacing={2}>
        <ShippingDetails formValues={formValues} />
        <BillingDetails formValues={formValues} />
        <PaymentDetails formValues={formValues} />
      </Grid>
    </React.Fragment>
  );
}
