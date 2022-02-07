import React from 'react';
import { at } from 'lodash';
import { useField } from 'formik';
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText
} from '@material-ui/core';

export default function CheckboxField(props) {
  const { label,checked, ...rest } = props;
  const [field, meta, helper] = useField(props);

  function _renderHelperText() {
    const [touched, error] = at(meta, 'touched', 'error');
    if (touched && error) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  
  return (
    <FormControl {...rest}>
      <FormControlLabel
        value={field.checked}
        checked={field.checked}
        control={<Checkbox {...field} checked={checked} />}
        label={label}
      />
      {_renderHelperText()}
    </FormControl>
  );
}
