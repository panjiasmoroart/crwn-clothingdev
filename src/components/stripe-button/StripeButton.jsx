import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  // sample 50 => 5000   
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_XkcGpyP7McoJOsvNqYriFXHj00enHFzSEr';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  // https://github.com/azmenak/react-stripe-checkout 
  return(
    <StripeCheckout 
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
