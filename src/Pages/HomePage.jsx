// src/Pages/HomePage.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [searchData, setSearchData] = useState({
    departure: '',
    destination: '',
    date: '',
    passengers: 1,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    navigate('/search', { state: searchData });
  };

  return (
    <div style={styles.container}>
      {/* Welcome Banner */}
      <section style={styles.banner}>
        <h1 style={styles.title}>Welcome to EzBooking</h1>
        <p style={styles.subtitle}>Book your next adventure with ease!</p>
      </section>

      {/* Flight Search Form */}
      <section style={styles.searchForm}>
        <h2>Book Your Flight</h2>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="departure"
            placeholder="Departure"
            value={searchData.departure}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="destination"
            placeholder="Destination"
            value={searchData.destination}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="date"
            name="date"
            value={searchData.date}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="number"
            name="passengers"
            placeholder="Passengers"
            value={searchData.passengers}
            onChange={handleChange}
            style={styles.input}
            min="1"
          />
          <button type="submit" style={styles.button}>Search Flights</button>
        </form>
      </section>

      {/* Popular Destinations */}
      <section style={styles.popularDestinations}>
        <h2>Popular Destinations</h2>
        <div style={styles.destinationsGrid}>
          <div style={styles.destinationCard}>
            <img src="https://via.placeholder.com/150" alt="New York" style={styles.image} />
            <p>New York</p>
          </div>
          <div style={styles.destinationCard}>
            <img src="https://via.placeholder.com/150" alt="Paris" style={styles.image} />
            <p>Paris</p>
          </div>
          <div style={styles.destinationCard}>
            <img src="https://via.placeholder.com/150" alt="Tokyo" style={styles.image} />
            <p>Tokyo</p>
          </div>
          <div style={styles.destinationCard}>
            <img src="https://via.placeholder.com/150" alt="Sydney" style={styles.image} />
            <p>Sydney</p>
          </div>
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '1rem 2rem',
  },
  banner: {
    textAlign: 'center',
    marginBottom: '2rem',
    backgroundColor: '#1E2A38',
    color: '#ffffff',
    padding: '2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.2rem',
  },
  searchForm: {
    marginBottom: '2rem',
    textAlign: 'center',
  },
  input: {
    margin: '0.5rem',
    padding: '0.5rem',
    fontSize: '1rem',
  },
  button: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#FF7F50',
    color: '#ffffff',
    border: 'none',
    cursor: 'pointer',
  },
  popularDestinations: {
    textAlign: 'center',
  },
  destinationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '1rem',
  },
  destinationCard: {
    textAlign: 'center',
    padding: '1rem',
    backgroundColor: '#f3f3f3',
    borderRadius: '8px',
  },
  image: {
    width: '100%',
    borderRadius: '8px',
  },
};

export default HomePage;
