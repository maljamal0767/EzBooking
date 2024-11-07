const bcrypt = require('bcryptjs');
const User = require('./User');

const seedUser = async () => {
  const passwordHash = await bcrypt.hash('password123', 10);
  const user = new User({
    username: 'testuser',
    password: passwordHash,
  });
  await user.save();
  console.log('User created');
};

seedUser();
