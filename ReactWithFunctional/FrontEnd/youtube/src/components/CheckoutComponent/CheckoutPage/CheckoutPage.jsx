import React, { useEffect, useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import { Formik, Form } from "formik";

import AddressForm from "./Forms/AddressForm";
import PaymentForm from "./Forms/PaymentForm";
import BillingAddress from "./Forms/BillingAddress";
import ReviewOrder from "./ReviewOrder";
import CheckoutSuccess from "./CheckoutSuccess";
import validationSchema from "./FormModel/validationSchema";
import checkoutFormModel from "./FormModel/checkoutFormModel";
import formInitialValues from "./FormModel/formInitialValues";
import useStyles from "./styles";

const steps = [
  "Shipping address",
  "Billing details",
  "Payment details",
  "Review your order",
];
const { formId, formField } = checkoutFormModel;

export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const currentValidationSchema = validationSchema[activeStep];
  const isLastStep = activeStep === steps.length - 1;
  const [checkBoxFlag, setCheckBoxFlag] = useState(false);

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  function _renderStepContent(step) {
    const handleChange = (event) => {
      if (event.target.checked) {
        setCheckBoxFlag(true);
      }
      if (event.target.checked === false) {
        setCheckBoxFlag(false);
      }
    };

    switch (step) {
      case 0:
        return (
          <AddressForm
            formField={formField}
            handleChange={handleChange}
            checkBoxFlag={checkBoxFlag}
          />
        );
      case 1:
        return <BillingAddress formField={formField} />;
      case 2:
        return <PaymentForm formField={formField} />;
      case 3:
        return <ReviewOrder checkBoxFlag={checkBoxFlag} />;
      default:
        return <div>Not Found</div>;
    }
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      if (activeStep === 0 && checkBoxFlag === true) {
        setActiveStep(activeStep + 2);
      } else {
        setActiveStep(activeStep + 1);
      }
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  

  return (
    <React.Fragment>
      {console.log(checkBoxFlag)}
      <Typography component="h1" variant="h4" align="center">
        Checkout
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={currentValidationSchema}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? "Place order" : "Next"}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}
