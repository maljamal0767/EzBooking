import React, { useState } from 'react';

const FlightSearchForm = ({ onSearch }) => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ departure, destination });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={departure} onChange={(e) => setDeparture(e.target.value)} placeholder="Departure" />
      <input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Destination" />
      <button type="submit">Search</button>
    </form>
  );
};

export default FlightSearchForm;
