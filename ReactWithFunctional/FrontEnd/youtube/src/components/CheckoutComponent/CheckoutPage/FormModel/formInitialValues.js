import checkoutFormModel from './checkoutFormModel';
const {
  formField: {
    firstName,
    lastName,
    address1,
    city,
    zipcode,
    country,
    useAddressForPaymentDetails,
    nameOnCard,
    cardNumber,
    expiryDate,
    cvv,
    
  }
} = checkoutFormModel;

export default {
  [firstName.name1]: '',
  [lastName.name1]: '',
  [address1.name1]: '',
  [firstName.name2]: '',
  [lastName.name2]: '',
  [address1.name2]: '',
  [city.name1]: '',
  [city.name2]: '',
  [zipcode.name1]: '',
  [country.name1]: '',
  [zipcode.name2]: '',
  [country.name2]: '',
  [useAddressForPaymentDetails.name]: false,
  [nameOnCard.name]: '',
  [cardNumber.name]: '',
  [expiryDate.name]: '',
  [cvv.name]: ''
};
