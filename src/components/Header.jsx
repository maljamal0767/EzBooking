// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>EzBooking</Link>
      </div>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/booking" style={styles.link}>Bookings</Link>
        <Link to="/profile" style={styles.link}>Profile</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1E2A38',
    color: '#ffffff',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  nav: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontWeight: '500',
  }
};

export default Header;