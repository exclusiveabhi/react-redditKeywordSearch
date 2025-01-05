const axios = require('axios');

// Configure Reddit API client
const redditAPI = axios.create({
    baseURL: 'https://www.reddit.com/',
    headers: { 'User-Agent': 'MERN-Reddit-Search/1.0' }
});

module.exports = redditAPI;
