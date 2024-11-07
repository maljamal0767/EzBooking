import React from 'react';

const FlightResults = ({ flights }) => (
  <div>
    {flights.map((flight) => (
      <div key={flight.id}>
        <p>{flight.details}</p>
      </div>
    ))}
  </div>
);

export default FlightResults;
