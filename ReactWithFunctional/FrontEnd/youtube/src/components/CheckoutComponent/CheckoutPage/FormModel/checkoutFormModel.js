export default {
  formId: 'checkoutForm',
  formField: {
    firstName: {
      name1: 'firstName1',
      name2:  'firstName2',
      label: 'First name*',
      requiredErrorMsg: 'First name is required'
    },
    lastName: {
      name1: 'lastName1',
      name2:'lastName2',
      label: 'Last name*',
      requiredErrorMsg: 'Last name is required'
    },

    address1: {
      name1: 'address1',
      name2: 'address2',
      label: 'Address Line 1*',
      requiredErrorMsg: 'Address Line 1 is required'
    },
    address2: {
      name1: 'address3',
      name2: 'address4',
      label: 'Address Line 2'
    },
    city: {
      name1: 'city1',
      name2: 'city2',
      label: 'City*',
      requiredErrorMsg: 'City is required'
    },
    state: {
      name1: 'state1',
      name2: 'state2',
      label: 'State/Province/Region'
    },
    zipcode: {
      name1: 'zipcode1',
      name2: 'zipcode2',
      label: 'Zipcode*',
      requiredErrorMsg: 'Zipcode is required',
      invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
    },
    country: {
      name1: 'country1',
      name2: 'country2',
      label: 'Country*',
      requiredErrorMsg: 'Country is required'
    },
    useAddressForPaymentDetails: {
      name: 'useAddressForPaymentDetails',
      label: 'Use this address for payment details'
    },
    nameOnCard: {
      name: 'nameOnCard',
      label: 'Name on card*',
      requiredErrorMsg: 'Name on card is required'
    },
    cardNumber: {
      name: 'cardNumber',
      label: 'Card number*',
      requiredErrorMsg: 'Card number is required',
      invalidErrorMsg: 'Card number is not valid (e.g. 4111111111111)'
    },
    expiryDate: {
      name: 'expiryDate',
      label: 'Expiry date*',
      requiredErrorMsg: 'Expiry date is required',
      invalidErrorMsg: 'Expiry date is not valid'
    },
    cvv: {
      name: 'cvv',
      label: 'CVV*',
      requiredErrorMsg: 'CVV is required',
      invalidErrorMsg: 'CVV is invalid (e.g. 357)'
    }
  }
};
