import React from 'react';
import Profile from '../components/Profile';

const ProfilePage = () => (
  <div>
    <h2>Profile</h2>
    <Profile user={{ name: 'John Doe' }} />
  </div>
);

export default ProfilePage;
