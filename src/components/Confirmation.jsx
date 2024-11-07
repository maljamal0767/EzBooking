import React from 'react';

const Confirmation = ({ bookingDetails }) => (
  <div>
    <h2>Booking Confirmation</h2>
    <p>Thank you for your booking, {bookingDetails.passengerName}!</p>
  </div>
);

export default Confirmation;
