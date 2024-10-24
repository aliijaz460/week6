const redis = require('redis');
const client = redis.createClient();

const cache = (req, res, next) => {
  const key = 'userData'; // Use a suitable key for your data

  client.get(key, (err, data) => {
    if (err) throw err;

    if (data) {
      res.json(JSON.parse(data)); // Return cached data if available
    } else {
      next(); // Proceed to next middleware/controller if not cached
    }
  });
};

module.exports = cache;
