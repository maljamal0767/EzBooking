// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './Pages/HomePage.jsx';
import SearchPage from './Pages/SearchPage.jsx';
import BookingPage from './Pages/BookingPage.jsx';
import ConfirmationPage from './Pages/ConfirmationPage.jsx';
import ProfilePage from './Pages/ProfilePage.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
