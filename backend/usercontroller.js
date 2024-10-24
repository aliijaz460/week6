const redis = require('redis');
const client = redis.createClient(); // Setup Redis client

const getUserData = async (req, res) => {
  const cachedData = await client.get('userData');
  
  if (cachedData) {
    return res.json(JSON.parse(cachedData)); // Return cached data
  }
  
  try {
    const userData = await fetch('https://api.example.com/user'); // Replace with your API URL
    const data = await userData.json();

    client.set('userData', JSON.stringify(data), 'EX', 3600); // Cache data for 1 hour

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getUserData };
