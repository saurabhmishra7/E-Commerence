import * as Yup from 'yup';
import moment from 'moment';
import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    zipcode,
    country,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv
  }
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;

export default [
  Yup.object().shape({
    [firstName.name1]: Yup.string().required(`${firstName.requiredErrorMsg}`).matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    [lastName.name1]: Yup.string().required(`${lastName.requiredErrorMsg}`).matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    [address1.name1]: Yup.string().required(`${address1.requiredErrorMsg}`),
    [city.name1]: Yup.string()
      .nullable()
      .required(`${city.requiredErrorMsg}`),
    [zipcode.name1]: Yup.string()
      .required(`${zipcode.requiredErrorMsg}`)
      .test(
        'len',
        `${zipcode.invalidErrorMsg}`,
        val => val && val.length === 5
      ),
    [country.name1]: Yup.string()
      .nullable()
      .required(`${country.requiredErrorMsg}`)
  }),
  Yup.object().shape({
    [firstName.name2]: Yup.string().required(`${firstName.requiredErrorMsg}`).matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    [lastName.name2]: Yup.string().required(`${lastName.requiredErrorMsg}`).matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    [address1.name2]: Yup.string().required(`${address1.requiredErrorMsg}`),
    [city.name2]: Yup.string()
      .nullable()
      .required(`${city.requiredErrorMsg}`),
    [zipcode.name2]: Yup.string()
      .required(`${zipcode.requiredErrorMsg}`)
      .test(
        'len',
        `${zipcode.invalidErrorMsg}`,
        val => val && val.length === 5
      ),
    [country.name2]: Yup.string()
      .nullable()
      .required(`${country.requiredErrorMsg}`)
  }),
  Yup.object().shape({
    [nameOnCard.name]: Yup.string().required(`${nameOnCard.requiredErrorMsg}`),
    [cardNumber.name]: Yup.string()
      .required(`${cardNumber.requiredErrorMsg}`)
      .matches(visaRegEx, cardNumber.invalidErrorMsg),
    [expiryDate.name]: Yup.string()
      .nullable()
      .required(`${expiryDate.requiredErrorMsg}`)
      .test('expDate', expiryDate.invalidErrorMsg, val => {
        if (val) {
          const startDate = new Date();
          const endDate = new Date(2050, 12, 31);
          if (moment(val, moment.ISO_8601).isValid()) {
            return moment(val).isBetween(startDate, endDate);
          }
          return false;
        }
        return false;
      }),
    [cvv.name]: Yup.string()
      .required(`${cvv.requiredErrorMsg}`)
      .test('len', `${cvv.invalidErrorMsg}`, val => val && val.length === 3)
  })
];
