import React, { useState } from 'react';

const BookingForm = ({ onBook }) => {
  const [passengerName, setPassengerName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onBook({ passengerName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={passengerName} onChange={(e) => setPassengerName(e.target.value)} placeholder="Passenger Name" />
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
