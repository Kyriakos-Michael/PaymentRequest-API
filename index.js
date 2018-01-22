if ( window.PaymentRequest ) {
// If it is supported on the User's Browser
// Payment Request object
const supportedPaymentMethods = [
    {
        supportedMethods: ['basic-card']
    }
];
//Payment Details (ie. Cost & Currency)
const paymentDetails = {
    total: {
        label: 'Total Cost',
        amount: {
            currency : 'GPD',
            value: 30
        }
    }
}
  // Custom Options
const options = {}

const paymentRequest = new PaymentRequest(
    supportedPaymentMethods, paymentDetails, options
);

paymentRequest.show()
.then(payment => console.log(payment))
.catch(error => console.error(error));
}
else
{
    // Fallback to your other Implementation
}