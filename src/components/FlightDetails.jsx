import React from 'react';

const FlightDetails = ({ flight }) => (
  <div>
    <h2>Flight Details</h2>
    <p>{flight.details}</p>
  </div>
);

export default FlightDetails;
