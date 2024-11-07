import React from 'react';

const Profile = ({ user }) => (
  <div>
    <h2>User Profile</h2>
    <p>{user.name}</p>
  </div>
);

export default Profile;
